//Exercícios de leitura


//EXERCÍCIO 1
//Ele pega um número que o usuário digita e faz a divisão por 2 com sobras, e o resultado tem que ser igual a 0.
//Se o número do usuário for par, ele responde com a condição "if". Se o número digitado for ímpar, 
// será respondido com a condição do else


//EXERCÍCIO 2
//a
//O código serve para como um pequeno banco de dados onde o usuário digita a fruta que deseja saber o valor e
// o console responde com o falor daquela fruta.

//b
// "O preço da fruta Maçã é R$2.25"

//c
//Iria receber duas mensagens do console, o valor pedido e o valor abaixo do break retirado:
//"O preço da fruta Pêra é R$5.5"
//"O preço da fruta é R$5" //A mensagem seria assim pois o defaut não tem um valor


//EXERCÍCIO 3
//a
//Está dizendo que foi criado uma constante chamada numero onde ela é uma string
// e que recebe um valor do usuário e é convertido em número pela sintáxe Number.

//b
//Sendo 10 ou -10 não faz diferença pois o console vai mostrar a variável (mensagem),
// essa variavel foi criada dentro do filho do if, portando o pai não lê variáveis criadas e coisas dentro do filho,
// apenas o filho lê as coisas dele e do pai.

//c
//Talvez haja uma mensagem de erro dizendo que não foi declarado a variável "mensagem". 
//Isso aconteceria pois como a variável foi criado dentro do escopo filho e o bloco pai não pode acessa-lo,
// então fora do escopo filho essa variável não existe.



//Exercícios de escrita


//EXERCÍCIO 4
// //1 - 2
// let idade = Number(prompt("Diga sua idade"))

// //3.
// if (idade > 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }


//EXERCÍCIO 5
// let turno = prompt("Qual turno você estuda?")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa Tarde!")
// } else if (turno === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Informe um turno válido!")
// }


//EXERCÍCIO 6
// let turno = prompt("Qual turno você estuda?")

// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Informe um turno válido!")
//         break
// }


//EXERCÍCIO 7
// let genero = prompt("Qual gênero deseja assitir")
// let preco = Number(prompt("Valor do ingresso"))


// if (genero !== "Fantasia" ) {
//     console.log("Título inexistente")
// } else if (preco === 15) {
//     console.log("Bom Filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }



//DESAFIOS

//1
// let genero = prompt("Qual gênero deseja assitir")
// let preco = Number(prompt("Valor do ingresso"))


// if (genero !== "Fantasia") {
//     console.log("Título inexistente")
// } else if (preco === 15) {
//     let snack = prompt("Qual snack o senhor deseja?")
//     console.log("Bom Filme!")
//     console.log("... com", snack)
// } else {
//     console.log("Escolha outro filme :(")
// }


//2
let nome = prompt("Nome Completo")
let tpJogo = prompt("Qual tipo de jogo? -IN ou -DO?")


if (tpJogo === "DO") {
    console.log("---Dados da compra---")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tpJogo)
    let etapaDeJogoDO = prompt("Etapa do jogo: -SF -DT ou -FI")
    console.log("Etapa de jogo:", etapaDeJogoDO)
    if (etapaDeJogoDO === "SF") {
        let categoriaSF = Number(prompt("Categorias 1, 2, 3 ou 4?"))
        console.log("Categoria:", categoriaSF)
        if (categoriaSF === 1) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade de ingressos:", quantidade)
            let valor1 = Number(1320.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor1)
            console.log("Valor toltal: R$", valor1 * quantidade)
        }
        else if (categoriaSF === 2) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor2 = Number(880.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor2)
            console.log("Valor toltal: R$", valor2 * quantidade)
        }
        else if (categoriaSF === 3) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor3 = Number(550.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor3)
            console.log("Valor toltal: R$", valor3 * quantidade)
        }
        else if (categoriaSF === 4) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor4 = Number(220.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor4)
            console.log("Valor toltal: R$", valor4 * quantidade)
        }
        else {
            console.log("Digite uma das categorias 1,2,3,4")
        }
    }
    else if (etapaDeJogoDO === "DT") {
        let categoriaDT = Number(prompt("Categoria"))
        console.log("Categoria:", categoriaDT)
        if (categoriaDT === 1) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor1 = Number(1980.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor1)
            console.log("Valor toltal: R$", valor1 * quantidade)
        }
        else if (categoriaDT === 2) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor2 = Number(1320.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor2)
            console.log("Valor toltal: R$", valor2 * quantidade)
        }
        else if (categoriaDT === 3) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor3 = Number(880.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor3)
            console.log("Valor toltal: R$", valor3 * quantidade)
        }
        else if (categoriaDT === 4) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor4 = Number(330.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor4)
            console.log("Valor toltal: R$", valor4 * quantidade)
        }
        else {
            console.log("Digite uma das categorias 1,2,3,4")
        }
    }
    else if (etapaDeJogoDO === "FI") {
        let categoriaFI = Number(prompt("Categoria"))
        console.log("Categoria:", categoriaFI)
        if (categoriaFI === 1) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor1 = Number(330.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor1)
            console.log("Valor toltal: R$", valor1 * quantidade)
        }
        else if (categoriaFI === 2) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor2 = Number(330.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor2)
            console.log("Valor toltal: R$", valor2 * quantidade)
        }
        else if (categoriaFI === 3) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor3 = Number(330.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor3)
            console.log("Valor toltal: R$", valor3 * quantidade)
        }
        else if (categoriaFI === 4) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor4 = Number(330.00)
            console.log("---Valor---")
            console.log("Valor do ingresso: R$", valor4)
            console.log("Valor toltal: R$", valor4 * quantidade)
        }
        else {
            console.log("Digite uma das categorias 1,2,3,4")
        }
    } else {
        console.log("Digite uma categoria nacional válida")
    }
} else if (tpJogo === "IN") {
    console.log("---Dados da compra---")
    console.log("Nome do cliente:", nome)
    console.log("Tipo de jogo:", tpJogo)
    let etapaDeJogoIN = prompt("Etapa do jogo: -SF -DT ou -FI")
    console.log("Etapa de jogo:", etapaDeJogoIN)
    if (etapaDeJogoIN === "SF") {
        let categoriaSF = Number(prompt("Categorias 1, 2, 3 ou 4?"))
        console.log("Categoria:", categoriaSF)
        if (categoriaSF === 1) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor1 = Number(1320.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor1)
            console.log("Valor toltal: U$", valor1 * quantidade)
        }
        else if (categoriaSF === 2) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor2 = Number(880.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor2)
            console.log("Valor toltal: U$", valor2 * quantidade)
        }
        else if (categoriaSF === 3) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor3 = Number(550.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor3)
            console.log("Valor toltal: U$", valor3 * quantidade)
        }
        else if (categoriaSF === 4) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor4 = Number(220.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor4)
            console.log("Valor toltal: U$", valor4 * quantidade)
        }
        else {
            console.log("Digite uma das categorias 1,2,3,4")
        }
    }
    else if (etapaDeJogoIN === "DT") {
        let categoriaDT = Number(prompt("Categoria"))
        console.log("Categoria:", categoriaDT)
        if (categoriaDT === 1) {
            console.log("Quantidade:", quantidade, "ingressos")
            console.log("Quantidade:", quantidade)
            let valor1 = Number(1980.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor1)
            console.log("Valor toltal: U$", valor1 * quantidade)
        }
        else if (categoriaDT === 2) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor2 = Number(1320.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor2)
            console.log("Valor toltal: U$", valor2 * quantidade)
        }
        else if (categoriaDT === 3) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor3 = Number(880.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor3)
            console.log("Valor toltal: U$", valor3 * quantidade)
        }
        else if (categoriaDT === 4) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor4 = Number(330.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor4)
            console.log("Valor toltal: U$", valor4 * quantidade)
        }
        else {
            console.log("Digite uma das categorias 1,2,3,4")
        }
    }
    else if (etapaDeJogoIN === "FI") {
        let categoriaFI = Number(prompt("Categoria"))
        console.log("Categoria:", categoriaFI)
        if (categoriaFI === 1) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor1 = Number(330.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor1)
            console.log("Valor toltal: U$", valor1 * quantidade)
        }
        else if (categoriaFI === 2) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor2 = Number(330.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor2)
            console.log("Valor toltal: U$", valor2 * quantidade)
        }
        else if (categoriaFI === 3) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade)
            let valor3 = Number(330.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor3)
            console.log("Valor toltal: U$", valor3 * quantidade)
        }
        else if (categoriaFI === 4) {
            let quantidade = Number(prompt("Quantidade"))
            console.log("Quantidade:", quantidade, "ingressos")
            let valor4 = Number(330.00) * 4.20
            console.log("---Valor---")
            console.log("Valor do ingresso: U$", valor4)
            console.log("Valor toltal: U$", valor4 * quantidade)
        }
        else {
            console.log("Digite uma das categorias 1,2,3,4")
        }
    } else {
        console.log("Digite uma categoria internacional válida")
    }
} else {
    console.log("Dados inválidos")
};