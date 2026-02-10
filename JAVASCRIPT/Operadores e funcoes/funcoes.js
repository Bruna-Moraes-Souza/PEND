function saudacao() {
    console.log("Olá, JavaScript! Essa é uma função com parâmetro e sem retorno");
}

saudacao()


function somar(a,b) {
    return a+b;
}

console.log("Essa é uma função com parâmetro e com retorno: ", somar(5, 3));


function saudacaoNome(nome) {
    console.log("Olá, " + nome, "!! Essa é uma função com parâmetro e sem retorno");
}
saudacaoNome("Ana");


function imc(peso, h) {
    return peso/(h**2);
}
console.log("O IMC é: ", imc(65, 1.65));


function par(n) {
    return n%2;
}
let numero = 54;
if (par(numero) === 0) {
    console.log("O número", numero, "é par");
}else {
    console.log("O número", numero, "é ímpar");
}
console.log("_______(_________FUNÇÕES NATIVAS________________")
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getDate());
    console.log("Ano:", data.getDate());
    console.log("Hora:", data.getDate());
    console.log("Minutos:", data.getDate());
}

mostrarDataHora();


//Exemplo
console.log("Funções matematica");
console.log(Math.PI); 

function calcularOperações(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
}

calcularOperações(7.8);

function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Minúculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.tolowerCase());
}

analisarTexto("javaScript");

function oQueFazEssaFuncao(fase){
    console.log(fase.includes("JavaScript"));
}

oQueFazEssaFuncao("Eu estudo JavaScript");

function eEssaAqui(nome, curso){
    return "Aluno:" + nome + " | Curso: " + curso;
}

console.log(eEssaAqui("josé", "Front-End"));{
}