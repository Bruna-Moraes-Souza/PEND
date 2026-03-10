// Atividade 1 - mudar cor do título
const titulo = document.getElementById('titulo');
const botaoAzul = document.getElementById('azul');
const botaoVermelho = document.getElementById('vermelho');

botaoAzul.addEventListener('click', function(){
    titulo.style.color = 'blue';
});

botaoVermelho.addEventListener('click', function(){
    titulo.style.color = 'red';
});

// Atividade 2 - mostrar / esconder mensagem
const botaoToggle = document.getElementById('botaoToggle');
const mensagem = document.getElementById('mensagem');

botaoToggle.addEventListener('click', function(){
    mensagem.classList.toggle('oculto');
});

// Atividade 3 - contador de caracteres
const texto = document.getElementById('texto');
const contador = document.getElementById('contador');

texto.addEventListener('input', function(){
    contador.textContent = 'Caracteres digitados: ' + texto.value.length;
});

// Atividade 4 - contador de cliques
const btnClique = document.getElementById('btnClique');
const contCliques = document.getElementById('contCliques');
let cliqueCount = 0;

btnClique.addEventListener('click', function(){
    cliqueCount++;
    contCliques.textContent = 'Cliques: ' + cliqueCount;
});

// Atividade 5/6 - lista dinâmica e remoção
const itemInput = document.getElementById('itemInput');
const btnAdd = document.getElementById('btnAdd');
const lista = document.getElementById('lista');

btnAdd.addEventListener('click', function(){
    const val = itemInput.value.trim();
    if (val === '') return;
    const li = document.createElement('li');
    li.textContent = val;
    lista.appendChild(li);
    itemInput.value = '';
});

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        if (confirm('Remover este item?')) {
            e.target.remove();
        }
    }
});

// Desafio Hard - validação de campo
const nomeInput = document.getElementById('nomeInput');
const btnEnviarNome = document.getElementById('btnEnviarNome');
const msgNome = document.getElementById('msgNome');

btnEnviarNome.addEventListener('click', function(){
    if (nomeInput.value.trim() === '') {
        msgNome.textContent = 'O campo nome é obrigatório';
        msgNome.style.color = 'red';
    } else {
        msgNome.textContent = 'Nome enviado com sucesso!';
        msgNome.style.color = 'green';
    }
});