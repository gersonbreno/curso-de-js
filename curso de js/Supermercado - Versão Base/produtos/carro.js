import Produto from './produto.js'

export default class Carro extends Produto {
  constructor(nome, valor, codico, tipo, datavalidade) {
    super(nome, valor, codico, tipo)
  }
  aplicarDesconto() {
    return this.valor - this.valor * 0.3
  }
}
