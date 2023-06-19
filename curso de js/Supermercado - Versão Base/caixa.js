import Carrinho from './carrinho.js'
import Produto from './produtos/produto.js'
import Carro from './produtos/carro.js'
import Alimentacao from './produtos/alimentacao.js'
import Limpeza from './produtos/limpeza.js'
const nomeProduto = document.querySelector('#nomeProd')
const valorProduto = document.querySelector('#valorProd')
const tipoProduto = document.querySelector('#tipoProd')
const codigoProduto = document.querySelector('#codigoProd')
const dataProduto = document.querySelector('#dataProd')
const botaoAdd = document.querySelector('#adiconarProd')
const botaoRemove = document.querySelector('#removaProd')
const botaoDesconto = document.querySelector('#aplicaDesconto')
const valorTotal = document.querySelector('#valorTotal')
const valorFinal = document.querySelector('#valorFinal')
const listaProd = document.querySelector('.lista_prod')
const carrinho = new Carrinho()
botaoAdd.addEventListener('click', () => adicionaProduto())
botaoRemove.addEventListener('click', () => removeProduto())
botaoDesconto.addEventListener('click', () => aplicaDesconto())
tipoProduto.addEventListener('input', () => flagDataValidade())

function CriaProduto() {
  let produto
  if (tipoProduto.value === 'alimentacao') {
    produto = new Produto(
      nomeProduto.value,
      Number(valorProduto.value),
      codigoProduto.value,
      tipoProduto.value,
      flagDataValidade
    )
  } else if (tipoProduto.value === 'carro') {
    produto = new Produto(
      nomeProduto.value,
      Number(valorProduto.value),
      codigoProduto.value,
      tipoProduto.value
    )
  } else if (tipoProduto.value === 'limpeza') {
    produto = new Produto(
      nomeProduto.value,
      Number(valorProduto.value),
      codigoProduto.value,
      tipoProduto.value
    )
  } else if (tipoProduto.value === 'outro') {
    produto = new Produto(
      nomeProduto.value,
      Number(valorProduto.value),
      codigoProduto.value,
      tipoProduto.value
    )
  }
  return produto
}

function adicionaProduto() {
  const produto = CriaProduto()
  carrinho.adicionarProdutor(produto)
  exibeProdutos()
  AtulizarValorTotal()
  console.log(produto)
  console.log(produto)
}
function removeProduto() {
  carrinho.removerProdutor()
  exibeProdutos()
  AtulizarValorTotal()
}
function AtulizarValorTotal() {
  valorTotal.textContent = 'valor total: R$: ' + carrinho.valor
}
function aplicaDesconto() {
  valorFinal.textContent = 'valor final: R$ ' + carrinho.calcularValorFinal()
}
function exibeProdutos() {
  let saida = ''
  carrinho.listaDeProdutos.forEach(produto => {
    saida += `<div class="produto"><p >${produto.nome}</p><p>${produto.tipo}</p><p>${produto.valor}</p></div>`
  })
  listaProd.innerHTML = saida
}

function flagDataValidade() {
  if (document.querySelector('#tipoProd').value === 'alimentacao') {
    document.querySelector('#dataProd').style.display = 'block'
  } else {
    document.querySelector('#dataProd').style.display = 'none'
  }
}
