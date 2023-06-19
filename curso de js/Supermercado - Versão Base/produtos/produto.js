export default class Produto {
  #nome
  #valor
  #codico
  #tipo

  constructor(nome, valor, codico, tipo) {
    this.#nome = nome
    this.#valor = valor
    this.#codico = codico
    this.#tipo = tipo
  }
  aplicarDesconto() {
    return this.#valor - this.#valor * 0.1
  }

  get nome() {
    return this.#nome
  }
  get valor() {
    return this.#valor
  }
  get codico() {
    return this.#codico
  }
  get tipo() {
    return this.#tipo
  }
}
