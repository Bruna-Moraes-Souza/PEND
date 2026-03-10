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