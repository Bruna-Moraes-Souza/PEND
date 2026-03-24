// Desafio Hard - validação de campo
const nomeInput = document.getElementById('nomeInput');
const btnEnviarNome = document.getElementById('btnEnviarNome');
const msgNome = document.getElementById('msgNome');

btnEnviarNome.addEventListener('click', () => {
    if (nomeInput.value.trim() === '') {
        msgNome.textContent = 'O campo nome é obrigatório';
        msgNome.style.color = 'red';
    } else {
        msgNome.textContent = 'Nome enviado com sucesso!';
        msgNome.style.color = 'green';
    }
});
// Validação simples de email

let email = document.querySelector("#emailInput"); 
let msg = document.querySelector("#msgEmail"); 
let senha = document.querySelector("#senhaInput"); 
let qnt = document.querySelector("#msgSenha"); 
let validar = document.querySelector("#btnEnviar"); 
let reportar = document.querySelector("#reportar"); 

// Validação da senha:
senha.addEventListener("keyup", function () {

    let tipoSenha = ""; 
    let cor = ""; 

    if (senha.value.length < 6) { 

        tipoSenha = "Atenção: Senha fraca!";
        cor = "red";

    } else if (senha.value.length > 10) { 

        tipoSenha = "Senha forte!";
        cor = "green";

    } else { 

        tipoSenha = "Senha aceitável!";
        cor = "orange";
    }
    
    qnt.innerHTML = 'Caracteres digitados: ${senha.value.length} ➔ <span style="color: ${cor}">${tipoSenha}</span>';
});

// Validação do email:
validar.addEventListener("click", function () { 

    if (email.value.includes("@") && email.value.includes(".")) { 
        reportar.textContent = "Email válido!";
        reportar.style.color = "green";
    } else { 
        msg.textContent = "Email inválido! Precisa conter: '@' e '.'";
        msg.style.color = "red";
    }
});
