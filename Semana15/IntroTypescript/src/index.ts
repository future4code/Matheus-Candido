// a)
// let minhaString: string = 21
// Ele da uma mesagem de ero no nome da variavel,
// onde diz que estou passando um valor numerico e ele espera uma string como valor

import { number, string } from "prop-types";

// b)

// let meuNumero: number | string = "String"

//c)
// let pessoa: {
//     nome: string,
//     idade: number,
//     corFavorita: string
// } = {
//     nome: "Matheus",
//     idade: 21,
//     corFavorita: "purple"
// }

//d)
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// let ted: pessoa = {
//     nome: "Ted mosby",
//     idade: 27,
//     corFavorita: "preto"
// }

// let marshall: pessoa = {
//     nome: "Marshall Eriksen",
//     idade: 40,
//     corFavorita: "preto"
// }
// let barney: pessoa = {
//     nome: "Barney Stinson",
//     idade: 31,
//     corFavorita: "preto"
// }


// const HIMYM: Array<pessoa> = [ted, marshall, barney]

// console.table(HIMYM)

//e)
// enum CORES_DO_ARCO_IRIS {
//     PURPLE = "PURPLE",
//     RED = "RED",
//     GREEN = "GREEN",
//     ORANGE = "ORANGE",
//     YELLOW = "YELLOW",
//     BLUE = "BLUE",
//     INDIGO = "INDIGO"
// }
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: CORES_DO_ARCO_IRIS
// }

// let ted: pessoa = {
//     nome: "Ted mosby",
//     idade: 27,
//     corFavorita: CORES_DO_ARCO_IRIS.PURPLE
// }

// let marshall: pessoa = {
//     nome: "Marshall Eriksen",
//     idade: 40,
//     corFavorita: CORES_DO_ARCO_IRIS.INDIGO
// }
// let barney: pessoa = {
//     nome: "Barney Stinson",
//     idade: 31,
//     corFavorita: CORES_DO_ARCO_IRIS.ORANGE
// }


// const HIMYM: Array<pessoa> = [ted, marshall, barney]

// console.table(HIMYM)

//2)
//a) 
function obterEstatisticas(numeros: number): numerosOrdenados{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}