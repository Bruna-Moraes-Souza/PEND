const listaEventos = document.querySelector("#listaEventos");
const mensagem = document.querySelector("#mensagem");
const inputPesquisa = document.querySelector("#campoPesquisa") || document.querySelector("#Pesquisa");
const botaoPesquisar = document.querySelector("#botaoPesquisar");

if (!inputPesquisa || !botaoPesquisar || !listaEventos || !mensagem) {
    console.error("Elementos da página não encontrados.");
} else {
    const API_KEY = "wbZa0SM4wlfzyxSy1gML7PjLj4cA2xBf";

    async function buscarEventos() {
        const cidade = inputPesquisa.value.trim();

        if (!cidade) {
            mensagem.textContent = "Digite uma cidade para pesquisar.";
            listaEventos.innerHTML = "";
            return;
        }

        mensagem.textContent = "Carregando eventos...";
        listaEventos.innerHTML = "";

        const cidadeCodificada = encodeURIComponent(cidade);

        // tenta primeiro com keyword fashion
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=${cidadeCodificada}&size=12&keyword=fashion`;

        try {
            const resposta = await fetch(url);
            const dados = await resposta.json();

            console.log("Resposta da API:", dados);

            if (dados && dados._embedded && dados._embedded.events && dados._embedded.events.length > 0) {
                renderizarEventos(dados._embedded.events);
                return;
            }

            // se não encontrar com keyword, tenta sem keyword
            url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=${cidadeCodificada}&size=12`;
            const resposta2 = await fetch(url);
            const dados2 = await resposta2.json();

            console.log("Resposta sem keyword:", dados2);

            if (dados2 && dados2._embedded && dados2._embedded.events && dados2._embedded.events.length > 0) {
                renderizarEventos(dados2._embedded.events);
                return;
            }

            mensagem.textContent = "Nenhum evento encontrado para essa cidade.";
            listaEventos.innerHTML = "";

        } catch (erro) {
            mensagem.textContent = "Erro ao buscar os eventos.";
            console.error("Erro no fetch:", erro);
        }
    }

    function renderizarEventos(eventos) {
        mensagem.textContent = "Eventos encontrados:";
        listaEventos.innerHTML = "";

        eventos.forEach(function (evento) {
            const card = document.createElement("div");
            card.classList.add("card");

            let imagem = "https://via.placeholder.com/400x200?text=Fashion+Event";
            if (evento.images && evento.images.length > 0) {
                imagem = evento.images[0].url;
            }

            let data = "Data não informada";
            if (evento.dates && evento.dates.start) {
                data = evento.dates.start.localDate;
            }

            let local = "Local não informado";
            if (evento._embedded && evento._embedded.venues && evento._embedded.venues.length > 0) {
                local = evento._embedded.venues[0].name;
            }

            card.innerHTML = `
                <img src="${imagem}" alt="Imagem do evento">
                <div class="card-conteudo">
                    <h3>${evento.name}</h3>
                    <p>📅 ${data}</p>
                    <p>📍 ${local}</p>
                    <a href="${evento.url}" target="_blank">Ver evento</a>
                </div>
            `;

            listaEventos.appendChild(card);
        });
    }

    botaoPesquisar.addEventListener("click", buscarEventos);

    inputPesquisa.addEventListener("keypress", function (evento) {
        if (evento.key === "Enter") {
            buscarEventos();
        }
    });
}