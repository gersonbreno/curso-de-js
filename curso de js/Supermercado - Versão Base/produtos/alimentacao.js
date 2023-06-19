import Produto from './produto.js'

export default class Alimentacao extends Produto {
  #dataValidade

  constructor(nome, valor, codico, tipo, datavalidade) {
    super(nome, valor, codico, tipo)
    this.#dataValidade = datavalidade
  }
  get datavalidade() {
    return this.#dataValidade
  }
}
