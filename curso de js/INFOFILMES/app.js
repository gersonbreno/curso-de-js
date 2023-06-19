const nomeBusca = document.querySelector('.input')
const mesagemErro = document.querySelector('#mensagemErro')
const botaoBuscar = document.querySelector('#botao_buscar')
const titulo = document.querySelector('#titulo')
const ano = document.querySelector('#ano')
const duraçao = document.querySelector('#duracao')
const genero = document.querySelector('#genero')
const diretor = document.querySelector('#diretor')
const atores = document.querySelector('#atores')
const poster = document.querySelector('.poster')
const sinopse = document.querySelector('#sinopse')
const apiKey = 'c4f07ff4'
const imgDefault = './default_image.png'

async function buscaFilme(nomeBusca) {
  const resposta = await fetch(
    `http://www.omdbapi.com/?t=${nomeBusca}&apikey=${apiKey}`
  )
  return resposta.json()
}

botaoBuscar.addEventListener('click', () => {
  limparCampos()
  core()
})

async function core() {
  try {
    const filme = await buscaFilme(nomeBusca.value)
    validaDados(filme)
    defineValores(filme)
  } catch (erro) {
    console.log(erro)
    mesagemErro.textContent = `${erro}`
  }
}

function defineValores(filme) {
  titulo.textContent = filme.Title
  sinopse.textContent = filme.Plot
  ano.textContent = `Year: ${filme.Year}`
  duraçao.textContent = `Run time: ${filme.Runtime}`
  genero.textContent = `Genere: ${filme.Genere}`
  atores.textContent = `Actors: ${filme.Actors}`
  diretor.textContent = `Director: ${filme.Director}`
  poster.setAttribute('src', filme.Poster)
}
function limparCampos() {
  titulo.textContent = ''
  sinopse.textContent = ''
  ano.textContent = ''
  duraçao.textContent = ''
  genero.textContent = ''
  atores.textContent = ''
  diretor.textContent = ''
  poster.setAttribute('src', imgDefault)
}

function validaDados(filme) {
  if (
    filme.Plot === undefined ||
    filme.Year === undefined ||
    filme.Actors === 'N/A'
  ) {
    throw new Error('Filme nao foi encontrado!!')
  }
}
