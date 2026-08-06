class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(){
        console.log("O produto ${this.nome} foi vendido!");
    }

    repor(){
        console.log("O produto ${this.nome} foi reposto!");
    }

    alterarPreco(){
        console.log("O preço do produto ${this.nome} foi alterado!");
    }
}

const produto1 = new Produto("Vestido", 40, 90);

const produto2 = new Produto("Tênis", 200, 60);

const produto3 = new Produto("Saia", 70, 40);

produto1.vender();
produto2.repor();
produto3.alterarPreco();

console.log("---------------------------------");
console.log("Atributos do Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("---------------------------------");

console.log("Atributos do Produto 2: ");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);
console.log("---------------------------------");

console.log("Atributos do Produto 3: ");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("---------------------------------");