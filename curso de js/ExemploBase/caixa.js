import Carrinho from "./carrinho.js";

const carro1 = new Carrinho();

console.log(carro1.listaDeProdutos);
console.log(carro1.valorTotal);
carro1.adicionaProduto();
console.log(carro1.listaDeProdutos);

const carro2 = new Carrinho();
console.log(carro2.listaDeProdutos);
