//Exercícios de escrita

//EXERCÍCIO 1
//Ele cria uma variável "valor = 0", usando o for ele diz o seguinte: crie uma variável "i = 0" e se essa variavel for abaixo de 5 é pra rodar o for de novo 
// e acrescenta mais 1 na próxima vez com o "i++". Dentro do for tem a variável "valor += i" onde ele pega o valor que esta rodando no "i = 0",
// la no for e acrescenta a essa variável e quando chegar ao 5 o loop acaba/para, e ele imprime na tela uma mensagem contendo o resultado da variável valor.


//EXERCÍCIO 2
//a. Vai ser impresso apenas os números maiores que 18

//b. Sim,
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(numero)
// }
// foi retirado a condição if e deixado apenas o console.log para que imprimisse a lista



//-------- DESAFIO -------------
//1
//"0 0 0 0"



//EXERCÍCIO 3
//a
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let array of arrayOriginal) {
    console.log(array)
}


//b
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let array of arrayOriginal) {
    console.log(array / 10)
}


//c
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let array of arrayOriginal) {
} console.log(arrayOriginal)


//d
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let i = 0
for (let array of arrayOriginal) {
    console.log(`O elemento do index ${i++} é ${array++}`)
}


//e
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = 0
let menor = 200

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > maior) {
        maior = arrayOriginal[i]
        for (let i = 0; i < arrayOriginal.length; i++) {
            if (arrayOriginal[i] < menor) {
                menor = arrayOriginal[i]
            }
        }

    }

} console.log(`O maior número é ${maior} e o o menor é ${menor}`)

//EXERCÍCIO 4

//EXERCÍCIO 5

//6

//7