// const titulo = document.getElementById('titulo-post')
// const autor = document.getElementById('autor-post')
// const conteudo = document.getElementById('conteudo-post')

// const formulario = {
//     titulo: document.getElementById('titulo-post'),
//     autor: document.getElementById('autor-post'),
//     conteudo: document.getElementById('conteudo-post')
// }

// // console.log(formulario)
// function adicionaPost() {
//     const container = document.getElementById('container-de-posts')
//     container.innerHTML += `<p>${formulario.titulo.value}</p> <p>${formulario.autor.value}</p> <p>${formulario.conteudo.value}</p>`
//     formulario.titulo.value = " "
//     formulario.autor.value = " "
//     formulario.conteudo.value = " "
// }




function adicionaPost() {
    const container = document.getElementById('container-de-posts').value
    const titulo = document.getElementById('titulo-post').value
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')
    container.innerHTML += `<div><p>${titulo.value}</p> <p>${autor.value}</p></div> <p>${conteudo.value}</p>`
    // Recebi as tags do HTML

    const formulario = {
        titulo: titulo,
        autor: autor.value,
        conteudo: conteudo.value
    }// Agora ele adiciona os valores gerados na página

    const memoria = [] //Criei a array
    memoria.push(formulario)// Adiciona os valores do objeto dentro do array

    console.log(formulario)// Imprime uma alteração por vez
    console.log(memoria)// Imprime todas as alterações dentro do array

    titulo.value = " "
    autor.value = " "
    conteudo.value = " "
    // "Limpa" os campos
}

// function redirect() {
//     document.getElementById("de-posts").innerHTML = window.location.search
// }

function apertouEnter(event) {
    if (event.key === 'Enter') {
        adicionaPost()
    }
}


function apertouBotao(event) {
    adicionaPost()
    //redirect()
}



// function identificarImagem() {
//     const imagem = document.getElementById('link-imagem').value
//     const container = document.getElementById('container-de-posts')
//     if (imagem.includes('.png') || imagem.includes('jpg')) {
//         container.innerHTML += `<img src=${imagem}>`
//     } else {
//         alert('Link incorreto! Insira imagem válida')
//     }
// formulario.image = imagem.value
// }
// function cliqueEnter(event) {
//     if (event.key === 'Enter') {
//         identificarImagem()
//     }
// }
// function cliqueImagem(event) {
//     identificarImagem()
// }