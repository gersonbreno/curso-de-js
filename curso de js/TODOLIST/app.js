const container = document.querySelector('.container')
const lsitaatividades = document.querySelector('.lista_atividades')
const input = document.querySelector('.input')
const erro = document.querySelector('.erro')
const botaoCadastra = document.querySelector('.botao_adc')
const botaoLimpar = document.querySelector('.botao_del_todos')
const paleta1 = document.querySelector('#paleta1')
const paleta2 = document.querySelector('#paleta2')
const paleta3 = document.querySelector('#paleta3')
paleta1.addEventListener('click', () => definePaleta('seagreen'))
paleta2.addEventListener('mousemove', () => definePaleta('slateblue'))
paleta3.addEventListener('dblclick', () => definePaleta('tomato'))
botaoCadastra.addEventListener('click', () => cadastraAtividade())
botaoLimpar.addEventListener('click', () => removerAtividades())
function removerAtividades() {
  while (lsitaatividades.firstElementChild) {
    lsitaatividades.removeChild(lsitaatividades.firstElementChild)
  }
}
function removerAtiviade(atividade) {
  lsitaatividades.removeChild(atividade)
}
function criaAtividade() {
  const atividade = document.createElement('div')
  atividade.classList.add('atividade')
  const nomeAtiviade = document.createElement('p')
  atividade.textContent = input.value
  const botaoLimpar = document.createElement('button')
  botaoLimpar.textContent = 'Limpar'
  botaoLimpar.classList.add('botao_del')
  botaoLimpar.addEventListener('click', () => removerAtiviade(atividade))
  lsitaatividades.appendChild(atividade)
  atividade.appendChild(nomeAtiviade)
  atividade.appendChild(botaoLimpar)
}
function definePaleta(cor) {
  container.style.background = cor
  lsitaatividades.style.background = cor
}

function cadastraAtividade() {
  if (input.value.length > 3) {
    erro.style.display = 'none'
    criaAtividade()
  } else {
    erro.style.display = 'grid'
    erro.innerHTML = `${input.value} não é uma atividade válida!`
  }
  limpaInput()
}

function limpaInput() {
  input.value = ''
}

window.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    cadastraAtividade()
  }
})
