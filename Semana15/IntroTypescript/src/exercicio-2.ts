// 2)
// a) 
// function obterEstatisticas(numeros: number[]) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([21, 2, 5, 100]))

// b)
// numerosOrdenados = recebe um array de numeros.
// soma = recebe numeros.
// estatisticas = recebe numeros dentro de um objeto.

// c) NÂO COMPREENDI A PERGUNTA E TRAVEI

// type amostras = {
//     numeros: [],
//     obterEstatisticas: (numeros: number[]) => {
//         estatisticas: number            
//     }
// }

// function obterEstatisticas(numeros: number[]): amostras{

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([21, 2, 5, 100]))