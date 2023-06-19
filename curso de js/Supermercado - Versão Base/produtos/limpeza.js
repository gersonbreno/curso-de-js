import Produto from './produto.js'

export default class Limpeza extends Produto {
  constructor(nome, valor, codico, tipo) {
    super(nome, valor, codico, tipo)
  }
  aplicarDesconto() {
    return this.valor - this.valor * 0.2
  }
}
