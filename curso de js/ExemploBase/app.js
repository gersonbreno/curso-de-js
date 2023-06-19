import CLT from './funcionarios/clt.js'
import PJ from './funcionarios/pj.js'
import Estagiario from './funcionarios/estagiario.js'
import Funcionario from './funcionarios/funcionario.js'
import FuncionarioFabrica from './funcionarios/funcionarioFabrica.js'
const fabrica = new FuncionarioFabrica()
const funcionarios = []

funcionarios.push(fabrica.criaFuncionario('CLT', 'Manuel'))
funcionarios.push(fabrica.criaFuncionario('PJ', 'Pedro'))
funcionarios.push(fabrica.criaFuncionario('Estagiario', 'Lucas'))

for (const funcionario of funcionarios) {
  funcionario.apresentaDados()
}
