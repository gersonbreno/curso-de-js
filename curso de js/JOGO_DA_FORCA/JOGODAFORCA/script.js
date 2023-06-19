/* Elemento HTML referente a categoria */
const categoria = document.querySelector('#category')
/* Elemento HTML referente a lista das letras erradas*/
const letrasErradas = document.querySelector('.wrongLetters')
/* Elemento HTML referente a palavra oculta
   Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
const palavraInterface = document.querySelector('.dashes')
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll('.eyes'))
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll('#person div'))
partesBoneco = partesBoneco.slice(2, partesBoneco.length)
/* Palavra corrente */
let palavraProposta
/* Lista das letras erradas */
let letrasErradasArray = []
/* Index da parte do corpo corrente */
let indiceBoneco
/* Numero de chances do jogador */
const numTentativas = 7
/* Valor para opacidade dos olhos */
const opacidadeOlhos = 0.3

const cartegorias = {
  frutas: [
    'banana',
    'maça',
    'laranja',
    'mamao',
    'uva',
    'melacia',
    'melao',
    'goiba',
    'limao'
  ],
  profissoes: [
    'engenheiro',
    'advogado',
    'medico',
    'professor',
    'pescador',
    'agricultor'
  ],
  animais: [
    'papagaio',
    'galo',
    'cachorro',
    'gato',
    'galinha',
    'cavalo',
    'jumento',
    'vaca'
  ],
  cores: ['amarelo', 'vermelho', 'azul', 'branco', 'verde', 'marrom', 'preto']
}

function retornaArrayCartegoria() {
  return Object.keys(cartegorias)
}

function retornaCartegoria() {
  const arrayCartegoria = retornaArrayCartegoria()
  let indiceCartegoria = Math.floor(Math.random() * arrayCartegoria.length)
  return arrayCartegoria[indiceCartegoria]
}

function exibeCartegoria() {
  categoria.innerHTML = retornaCartegoria()
}

function retonaNUmAletorio(max) {
  return Math.floor(Math.random() * max)
}

function definerPalavraProsposta() {
  const arrayPlavaras = cartegorias[categoria.innerHTML]
  let indecePalavra = retonaNUmAletorio(arrayPlavaras.length)
  palavraProposta = arrayPlavaras[indecePalavra]
  console.log(palavraProposta)
  ocultaPalvara()
}

function ocultaPalvara() {
  let palavaraOcultada = ''
  for (let i = 0; i < palavraProposta.length; i++) {
    palavaraOcultada += '-'
  }
  exibePalavraInterface(palavaraOcultada)
}

function exibePalavraInterface(palavra) {
  palavraInterface.innerHTML = palavra
}

function tentativa(letra) {
  if (palavraProposta.includes(letra)) {
    atualizaPalavraInterface(letra)
  } else {
    letrasErradasArray.push(letra)
    letrasErradas.innerHTML = 'Letras erradas: ' + letrasErradasArray
    if (partesBoneco.length > indiceBoneco) {
      desenhaBoneco()
    }
  }
  verificaFImDeJogo()
}

function verificaFImDeJogo() {
  if (!palavraInterface.innerHTML.includes('-')) {
    exibePalavraInterface('você venceu parabens')
    window.removeEventListener('keypress', retornaLetra)
  } else if (letrasErradasArray.length >= numTentativas) {
    desenhaOlhos()
    exibePalavraInterface('voce perdeu tente novamente')
    window.removeEventListener('keypress', retornaLetra)
  }
}

function atualizaPalavraInterface(letra) {
  let palavaraAux = ''
  for (let i = 0; i < palavraProposta.length; i++) {
    if (palavraProposta[i] === letra) {
      palavaraAux += letra
    } else if (palavraInterface.innerHTML[i] != '-') {
      palavaraAux += palavraInterface.innerHTML[i]
    } else {
      palavaraAux += '-'
    }
  }
  exibePalavraInterface(palavaraAux)
}
/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/
function retornaLetra(e) {
  tentativa(e.key)
}

/*
Desenha a parte do corpo corrente
*/
function desenhaBoneco() {
  partesBoneco[indiceBoneco].classList.remove('hide')
  indiceBoneco++
}

/* 
Desenha os olhos do personagem
*/
function desenhaOlhos() {
  olhos.forEach(olho => {
    olho.style.opacity = 1
    olho.style.zIndex = 10
  })
}

/*
Oculta as partes do corpo do personagem
*/
function ocultaBoneco() {
  olhos.forEach(olho => {
    olho.style.opacity = opacidadeOlhos
  })
  partesBoneco.forEach(parteBoneco => {
    parteBoneco.classList.add('hide')
  })
}

/*
Inicia as configurações do jogo
*/
function iniciaJogo() {
  indiceBoneco = 0
  letrasErradasArray = []
  exibeCartegoria()
  definerPalavraProsposta()
  letrasErradas.innerHTML = 'Letras erradas: '
  window.addEventListener('keypress', retornaLetra)
}

window.addEventListener('load', iniciaJogo)
