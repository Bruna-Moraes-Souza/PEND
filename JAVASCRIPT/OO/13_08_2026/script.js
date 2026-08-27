// const produto = [];
// const nome = document.querySelector("#nome");
// const preço = document.querySelector("#preço");
// const categoria = document.querySelector("#categoria");
// const desconto = document.querySelector("#desconto");
// const botaoCadastrar = document.querySelector("#botaoCadastrar");

// botaoCadastrar.addEventListener("click", function () {

//     const produto = new produto(nome.value, preço.value, categoria.value, desconto.value);

//     produtos.push(produto);
//     console.log(produtos);

//     produto.exibirNaTela();
//     produto.apresentar();
//     produto.exibirNaTela();

// });

class Produto {

    constructor(nome, preço, categoria, desconto) {

        this.nome = nome;
        this.preço = preço;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    // this.desconto = desconto;

    AplicarDesconto() {
        console.log(`${this.nome} está aplicando desconto...`);
        this.preço = this.preço - (this.preço * (this.desconto / 100));
    }

    exibirNaTela() {
        const resultado = document.querySelector("#resultado");


        resultado.innerHTML = `
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${produto.preço}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}</p>
            `;
    }
}

 class Funcionario {

     constructor() {
         this.funcionarios = [];
     }

     adicionarfuncionario(funcionario) {
         this.funcionarios.push(funcionario);
    }

    exibirNaTela() {

         const resultado = document.querySelector("#resultado");

         resultado.innerHTML = "";

         this.funcionarios.forEach(funcionario => {
             resultado.innerHTML += `
             <div>
             <p>----------------------</p>
                 <p>Nome: ${funcionario.nome}</p>
                 <p>Preço: ${funcionario.preço}</p>
                <p>Categoria: ${funcionario.categoria}</p>
                 <p>Desconto: ${funcionario.desconto}</p>
             <p>----------------------</p>
             </div>`;

        })
    }
}

const produto = new Produto();
const nome = document.querySelector("#nome");
const preço = document.querySelector("#preço");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preço.value, categoria.value, desconto.value);

    produto.AplicarDesconto();
    produto.exibirNaTela();

});