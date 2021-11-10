
//
function adicionarFilme() {
    const campoFilme = document.querySelector('#filme')
    const filmeFavorito = campoFilme.value
    
    if(filmeFavorito.endsWith('.jpg')) {
        listarFilmeNaTela(filmeFavorito)
    } else {
        alert('Imagem inválida')
    }
    campoFilme.value = '' //limpar campo
}

function listarFilmeNaTela(filme) {
    const listarFilmes = document.querySelector('#listaFilmes')
    const elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
}