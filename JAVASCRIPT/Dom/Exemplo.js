document.getElementById("conteudo").innerHTML = "<p>Olá, Mundo Dom</p>"
document.getElementById("mensagem").textContent="Texto simples, sem HTML TEXT CONTENT";
document.getElementById("foto").setAttribute("src", "image.png");
let url = document.getElementById("link").getAttribute("href");
console.log(url);
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add="destaque";
document.getElementById("alert").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo = "Esse elemento foi criado pelo JavaScript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);

let botao = document.querySelector("#botao");
let texto = document.querySelector("#texto");

botao.addEventListener("click", function () {
    texto.textContent = "Texto Alterado Apos o Clique!";
});

let input = document.getElementById("#nome");
let resultado = document.getElementById("#resultado");

input.addEventListener("keyup", function () {
    resultado.textContent = input.value;
});
