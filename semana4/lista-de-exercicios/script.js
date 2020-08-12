// - - - - - - - LISTA DE EXERCÍCIOS - - - - - - - //


// // - - - - - - - EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO - - - - - - - // //

//1
/*É criado uma função com o argumento "valorEmDolar".
Dentro desta função é criada uma constante onde ele pede ao usuário o valor da cotação e e já converte de String para Number,
e retorna "R$" junto com o argumento da função vezes o valor da cotação digitada pelo usuário.
Abaixo da função é criada uma constante chamada "meuDinheiro" que recebe a função acima e define o argumento da função, que no caso é 100.

Ele pede um console log dessa constante "meuDinheiro" que vai imprimir no console o valor convertido,
no caso o valor do usuario vezes 100 dando o resultado em reais. */


//2
/*Cria uma função "investeDinheiro" com dois argumentos. Dentro da função é cirado uma variável "valorAposInvestimento",
abaixo tem um switch case para a condição do primeiro arguumento da função "tipoDeInvestimento", onde cada case seria um tipo de investimento e
se o tipo for imgual ele executa o comando, que seria básicamente o mesmo em todos os cases,
onde a variável "valorAposInvestimento" é igual ao segundo argumento da função "valor" vezes o valor de cada tipo de inveztimento(apenas esse vária em cada case).

Se o tipo for diferente dos cases, mostra na tela um alert dizendo que o tipo está incorreto.
Um dos cases sendo true ele retorna o novo valor da variável "valorAposInvestimento" e saindo da função. Abaixo da função é criado duas constantes,
a primeira "novoMontsnte" recebe a função e define o primeiro argumento como "ações" e o segundo como 150.
a segunda "segundoMontante" também recebe a função mas o primeiro argumento é "Tesouro Direto" e o segundo como 200.

Ele pede um console log da primeira constante, como o primeiro argumento é verdadeiro ele executa a ação onde faz 150 vezes 1.1 imprimindo o resultado.
Ele pede um console log da segunda constante, mas como o primeiro argumento é false ele irá imprimir um alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" */


//3
/*Ele cria três constantes de array com os seguintes nomes:
"numeros" - dentro desse array há pelo menos 14 "numeros".
"arra1" e "array2" - ambos vazios.

abaixo tem um laço onde ele cria uma variável "numero" para a array de "numeros"(logo se eu falar da variável "numero" dentro desse laço, se trata da array numeros)
e executa o seguinte laço com as seguintes condições: se a sobra por dois de "numero" for igual a zero ele inclui esse número dentro do array1,
agora se a sobra por dois de "numero" não for igual a zero, ele inclui esse número dentro do array2.

Ele pede três console log:
Primeiro - imprime "Quantidade total de números" e a aquantidade de números dentro do array "numeros" que será 14
Segundo - imprime a quantidade de números dentro do array1 que será 6
Terceiro - imprime a quantidade de números dentro do array2 que será 8 */


//4

/*Cria uma constante "numeros" contendo 25 números(positivos e negativos) dentro do array.
Cria uma variável "numero1" com valor infinity, e outra chamada "numero2" com valor zero.

Tem um laço onde é criado uma variável "numero" para a array numeros(logo se eu falar da variável "numero" dentro desse laço, se trata da array numeros) com duas condiçoes dentro do laço que são executados ao memso tempo por serem dois if,
onde o primeiro if verifica se "numero" é menor que o array "numero1", se for ele diz que numero1 é igual a "numero",
e o segundo if verifica se o "numero" é maior que o array "numero2", se for ele diz que "numero2" é igual a "numero"

Dois console log:
Primeiro - imprime o array "numero1" que vai ter como valor o mesmo valor da array "numeros"
Segundo - imprime o array "numero2" que vai ter como valor o mesmo valor da array "numeros" porém sem o -10 pois ele é menor que 0 e não passou na condição */


// //  - - - - - - - EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO - - - - - - -  // //

//1
// /*Usando For, while, arrayfunction */
// const pokemons = [
//     { nome: "Pikachu", tipo: "Elétrico" },
//     { nome: "Charmeleon", Tipo: "Fogo" },
//     { nome: "Pachirisu", tipo: "Elétrico" }
// ]
// //arrayfunction
// const callback = (element, index, array) => {
//     if (element.tipo === "Elétrico") {
//        return element.tipo
//     }
// }
// const poke = pokemons.filter(callback)
// console.log(poke)


//2
//a - true
//b - true
//c - true
//d - true
//e - false


//3
/* Não funciona porque faltava complementos do loop, no caso faltava o i++ pra que o loop funcionasse corretamente,
e invez de dar resultado dentro do console log, faltou criar uma const result que fazia a operação e dar conseole log dessa const*/
// const quantidadeDeNumerosPares =[1,2,3,4,5]
// let i = 0
// while (i < quantidadeDeNumerosPares.length) {
//     const result = i * 2
//     console.log(result)
//     i++
// }


//4
// function tringulos(a, b, c) {
//     if (a === b && c === a) {
//         console.log(`É um Equilátero`)
//     }
//     if (a === b && b !== c) {
//         console.log(`É um Isóceles`)
//     }
//     if (a !== b && b === c) {
//         console.log(`É um Isóceles`)
//     }
//     if (a === c && b !== c) {
//         console.log(`É um Isóceles`)
//     }
//     if (a !== b && a !== c && b !== c) {
//         console.log(`É um Escaleno`)
//     }
// }
// const medidas = tringulos(10, 10, 10)


//5
// function numeros(numero1, numero2) {
//     if (numero1 > numero2) {
//         console.log(`O número é: ${numero1}`)
//     }
//     if (numero1 < numero2) {
//         console.log(`O maior é: ${numero2}`)
//     }
//     if (numero1 % numero2 !== 0) {
//         console.log(`${numero1} não é divisível por ${numero2}`)

//         if (numero2 % numero1 === 0) {
//             console.log(`${numero2} é divisível por ${numero1}`)
//         }
//     }
//     if (numero2 % numero1 !== 0) {
//         console.log(`${numero2} não é divisível por ${numero1}`)

//         if (numero1 % numero1 === 0) {
//             console.log(`${numero1} é divisível por ${numero2}`)
//         }
//     }
//     if (numero1 > numero2) {
//         const diff1 = numero1 - numero2
//         console.log(`A diferença entre eles é ${diff1}`)
//     }
//     if (numero1 < numero2) {
//         const diff2 = numero2 - numero1
//         console.log(`A diferença entre eles é ${diff2}`)
//     }
// }
// const resultado = numeros(30, 15)


// - - - - - - - EXERCÍCIOS DE FUNÇÕES

//1
// let numeros = [20, 10, 7, 5, 13]

// function verificaArray() {
//     for (let i = 0; i < numeros.length; i++) {
//         const elemento = numeros[i]
//         if (elemento > maiorNumero) {
//             maiorNumero = elemento
//         }
//         if (elemento < menorNumero) {
//             menorNumero = elemento
//         }
//     }
//     console.log(maiorNumero)
//     console.log(menorNumero)
// }
// const sla = verificaArray()

// //2
// // const mensagem = function(){
// //    return alert("Hello Future4")
// // }
// // const tela = mensagem()


// - - - - - - - EXERCÍCIOS DE OBJETOS 

//1 - Arrays são listas onde guardamos coisas, porem listas pequenas que podemos gurdar coisas mas não tantas.
// Agora Objetos podem ser considerados listas mas são usados para guardar mais coisas e mais organizadamente.


//2
// function criaRetangulo(lado1, lado2) {
//     const infos = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: (2 * (lado1 + lado2)),
//         area: lado1 * lado2
//     }
//     return infos
// }
// const result = criaRetangulo(2, 4)
// console.log(result)


//3
// const arrayFilmes = {
//     titulo: "Kimi no na wa",
//     ano: 2017,
//     diretor: "Makoto Shinkai",
//     atoresAtrizes: ["Taki", " Mitsuha"]
// }
// console.log(`Venha assistir ao filme ${arrayFilmes.titulo}, de ${arrayFilmes.ano}, dirigido por ${arrayFilmes.diretor} e estrelados por ${arrayFilmes.atoresAtrizes}(personagens de anime).`)


//4
// const pessoa = {
//     nome: "Matheus",
//     idade: 21,
//     email: "imperadorderoma@gmail.com",
//     endereco: ["rua 200", "nº 25", "bairro holandes"]
// }

// const anonimizarPessoa = {
//     ...pessoa,
//     nome:"anonimo"
// }
// console.log(anonimizarPessoa)



// - - - - - - - EXERCÍCIOS DE FUNÇÔES DE ARRAY

//a
// const array = [
//     { nome: "Pedro", idade: 20 },
//     { nome: "João", idade: 10 },
//     { nome: "Paula", idade: 12 },
//     { nome: "Artur", idade: 89 }
// ]

// const callback = (element, index, array) => {
//     if (element.idade >= 20) {
//         return true
//     }
// }
// const novoArray = array.filter(callback)
// console.log(novoArray)


//b
// const array = [
//     { nome: "Pedro", idade: 20 },
//     { nome: "João", idade: 10 },
//     { nome: "Paula", idade: 12 },
//     { nome: "Artur", idade: 89 }
// ]

// const callback = (element, index, array) => {
//     if (element.idade < 20) {
//         return true
//     }
// }
// const novoArray = array.filter(callback)
// console.log(novoArray)


//2
//a
// const array = [1, 2, 3, 4, 5, 6]

// function verificar() {
//     const mapArray = array.map(item => item * 2)
//     return mapArray
// }
// const nvArray = verificar()
// console.log(nvArray)


//b
// const array = [1, 2, 3, 4, 5, 6]

// const novoArray = array.map((elementoDoArray) => {
//     if (elementoDoArray) {
//         return `${elementoDoArray * 2}`
//     }
// })
// console.log(novoArray)

//c
//const numeros = [2, 3, 15, 22, 10]

// const novoArray = numeros.map((elementoDoArray, indexDoArray, arrayEmSi) => {
//     if (elementoDoArray % 2 === 0) {
//         return `O número ${elementoDoArray} é par`
//     }
//     else {
//         return `O número ${elementoDoArray} é ímpar`
//     }
// })

// console.log(novoArray)


//3
//a
// const pessoas = [
//     { nome: "Paula", idade: 12, altura: 1.8 },
//     { nome: "João", idade: 20, altura: 1.3 },
//     { nome: "Pedro", idade: 15, altura: 1.9 },
//     { nome: "Luciano", idade: 22, altura: 1.8 },
//     { nome: "Artur", idade: 10, altura: 1.2 },
//     { nome: "Soter", idade: 70, altura: 1.9 }
// ]
// const permitido = pessoas.filter((element) => {
//     if (element.idade >= 14 && element.altura >= 1.5) {
//         return true
//     }
// })
// console.log(permitido)

//b
// const naoPermitido = pessoas.filter((element) => {
//     if (element.idade < 14 || element.altura < 1.5) {
//         return true
//     }
// })
// console.log(naoPermitido)


//4
const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]
const generos = [

]
const email = consultas.map((element) => {
    let init = "Sr."
    let lembrar = "Lembrá-la"
    const confirm = ""
    const cancela = ""

    if (element.cancelada === false) {
        if (element.genero === "masculino") {

            init = "Sra."
            lembrar = "Lembrá-lo"
            return confirm
        }
        else {
            return confirm
        }
    }
    if (element.cancelada === true) {
        if (element.genero === "masculino") {
            init = "Sr."
            lembrar = "Lembrá-lo"
            return cancela
        } return cancela
    }
    confirm = `Olá, ${init} ${element.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${element.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    cancela = `Olá, ${init} ${element.nome}. Infelizmente, sua consulta marcada para o dia ${element.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`

})

console.log(email)
