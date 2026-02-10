function mostrarHora() {
    let HoraAtual = new Date();

    console.log("Hora:", data.getDate());
    console.log("Minutos:", data.getDate());
}

mostrarHora();

function calcularSomaEMedia(num1, num2) {
    let soma = num1 + num2;
    let media = soma / 2;

    console.log("Soma:", soma);
    console.log("Média:", media);
}

// Exemplo de uso
calcularSomaEMedia(10, 20);

function analisarNome(nome) {
    let quantidadeLetras = nome.length;
    let nomeMinusculo = nome.toLowerCase();

    console.log("Quantidade de letras:", quantidadeLetras);
    console.log("Nome em minúsculas:", nomeMinusculo);
}

// Exemplo de uso
analisarNome("Bruna");

function verificarHTML(frase) {
    if (frase.includes("HTML")) {
        console.log("A frase contém a palavra HTML.");
    } else {
        console.log("A frase NÃO contém a palavra HTML.");
    }
}

// Exemplo de uso
verificarHTML("Estou aprendendo HTML e CSS");