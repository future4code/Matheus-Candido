//EXERCÍCIOS DE LEITURA

//EXERCÍCIO 1
//a 
//dois consoles.log, duas linhas imprimidas, 10 e 50 que são os resultados das operações definidas pelo return dentro da função.

//b 
//no console apareceria que a função não foi definida, pois não é possível acessar uma função fora dela.

//EXERCÍCIO 2
//a
//Vão ser impressas no console os dois primeiros nomes Danvas e Goli. Em linhas separadas

//b
//Amanda e Caio. Também em linhas separadas

//EXERCÍCIO 3
//Dentro da função ela cria um array vazio e ela diz que: a sobra de 2 do x que ela criou não for igual a 0, ela adiciona no array um x*x que ficaria impresso na array [x²].
//O nome da função poderia ter algo haver com o que a função faz, como "adicionaXNaArray" ou "adicionaX"

//EXERCÍCIOS DE ESCRITA

//EXERCÍCIO 4
//a
// function infos() {
//     console.log("Meu nome é Matheus, tenho 21 anos, moro em Santa Catarina e sou estudante.")
// }
// infos()

//b
// function infos(nome, idade, cidade, estudante = true) {

//     if (estudante === true) {
//         console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}, sou estudante`)
//     } else {
//         console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}, não sou estudante`)
//     }
//     return 
// }

// const completo = infos("Matheus", 21, "Santa Catarina", true)

//EXERCÍCIO 5
//a
// function somaDeDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }

// const resultado = somaDeDoisNumeros(20, 33)
// console.log(resultado)

//b
// function somaDeDoisNumeros(numero1, numero2) {
//     if (numero1 >= numero2) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//     return
// }

// const resultado = somaDeDoisNumeros(20, 33)

//c
// let i = 0
// function mensagem(algo) {

//     while (i < 10) {
//         console.log("Não sei o que dizer")
//         i++
//     }
//     return 
// }
// const resultado = mensagem()

//EXERCÍCIO 6
//a
// function fDaArray(numerosDaArray) {
//     for (const quantidade of numerosDaArray) {

//     }
//     return numerosDaArray.length
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const itensArray = fDaArray(array)
// console.log(itensArray)

//b
// function fDaArray(numerosDaArray) {

//         if (numerosDaArray % 2 === 0) {
//             console.log("Par")
//         }else {
//             console.log("Ímpar")
//         }



//     return 
// }
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const itensArray = fDaArray(array[7])


//c
// function verificar(array) {
//     let arrayFinal = [];

//     for (let n of array) {
//         if (n % 2 === 0) {
//             arrayFinal.push(n)
//         }
//     }

//     return arrayFinal.length;
// }
// let arrayFinal = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// const final = verificar(arrayFinal)
// console.log(final)

//d
// function verificar(array) {
//     let arrayFinal = [];

//     for (let n of array) {
//         if (n % 2 === 0) {
//             arrayFinal.push(true)
//         }
//         else {
//             arrayFinal.push(false)
//         }
//     }

//     return arrayFinal;
// }
// let arrayFinal = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// const final = verificar(arrayFinal)
// console.log(final)
// - - - - - DESAFIOS - - - - - //