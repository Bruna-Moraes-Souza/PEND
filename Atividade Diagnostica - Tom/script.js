const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome == "" || email == ""){
        alert("Preencha todos os campos.");
    }else{
        alert("Olá, " + nome + "! Obrigado por entrar em contato.");
        formulario.reset();
    }

});