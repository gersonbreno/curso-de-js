import CLT from './funcionarios/clt.js'
import PJ from './funcionarios/pj.js'
import Estagiario from './funcionarios/estagiario.js'
import Funcionario from './funcionarios/funcionario.js'
export default class FuncionarioFabrica {
  constructor() {}

  criaFuncionario(regime, nome) {
    if (regime === 'CLT') {
      return new CLT(nome)
    } else if (regime === 'PJ') {
      return new PJ(nome)
    } else if (regime === 'Estagiario') {
      return new Estagiario(nome)
    } else {
      return new Funcionario(nome)
    }
  }
}
