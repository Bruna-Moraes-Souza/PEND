const matematica = document.querySelector("#Matematica");
const historia = document.querySelector("#Historia");
const materias = document.querySelector("#materias");
const carrinho = document.querySelector("#Tarefas");

//event = objeto fornecido pelo navegador, que contem informacoes sobre o evento que ocorreu
//dataTransfer = objeto para armazenar dados durante a opção de arrastar e soltar
matematica.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text", event.target.id);
});

historia.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text", event.target.id);
});

materias.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text", event.target.id);
});

//mudar o padrao
carrinho.addEventListener("dragover", function (event) {
  event.preventDefault();
  console.log("Pode soltar aqui a tarefa...");
});

//soltar 
carrinho.addEventListener("drop", function (event) {
  event.preventDefault();

  const id = event.dataTransfer.getData("text");
  const elemento = document.querySelector("#" + id);

  //a div do produto passa a ser filho da div carrinho
    carrinho.appendChild(elemento);
});