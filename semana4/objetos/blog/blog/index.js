
function adicionaPost() {
    const container = document.getElementById('container-de-posts')
    const titulo = document.getElementById('titulo-post')
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')
    // Recebi as tags do HTML
    container.innerHTML += `<div><p>${titulo.value}</p> <p>${autor.value}</p></div> <p>${conteudo.value}</p>`
    // Adiciona os valores digitados no HTML


    const formulario = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }// Agora ele adiciona os valores gerados na página

    const memoria = [] //Criei a array
    memoria.push(formulario) // Adiciona os valores do objeto dentro do array

    console.log(formulario) // Imprime uma alteração por vez
    console.log(memoria) // Imprime todas as alterações dentro do array

    titulo.value = " "
    autor.value = " "
    conteudo.value = " "
    // "Limpa" os campos
}

// function redirect() {
//     document.getElementById("de-posts").innerHTML = window.location.search
// } //Era pra redirecionar a página

function apertouEnter(event) {
    if (event.key === 'Enter') {
        adicionaPost()
    }
} // Essa função recebe a função principal e usa através do input


function apertouBotao(event) {
    adicionaPost()
    //redirect()
}// Essa função recebe a função principal e usa através do botão


// Função adicionar imagem
function identificarImagem() {
    const imagem = document.getElementById('link-imagem').value
    const container = document.getElementById('container-de-posts')
    if (imagem.includes('.png') || imagem.includes('jpg')) {
        container.innerHTML += `<img src=${imagem}>`
        imagem.value = " "
    } else {
        alert('Link incorreto! Insira imagem válida')
    }

}
function cliqueEnter(event) {
    if (event.key === 'Enter') {
        identificarImagem()
    }
}
function cliqueImagem(event) {
    identificarImagem()

}