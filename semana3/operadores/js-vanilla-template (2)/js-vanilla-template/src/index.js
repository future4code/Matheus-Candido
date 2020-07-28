//EXERCÍCIOS DE INTERPRETAÇÃO

//1. 

// a.false
// b.false
// c.false
// e.false


//2.

// a.undefined
// b.null
// c.10
// d.[0]
// e.[19]
// f.[25]


//EXERCÍCIOS DE ESCRITA 

//1 

//a
const idade = prompt("Qual a sua idade?")
//b
const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

const age = Number(idade)
const ageMelhorAmigo = Number(idadeMelhorAmigo)

//c
const resposta = idade > idadeMelhorAmigo

console.log("Sua idade é maior do que dos seu amigo? " + resposta )

//d
const diferenca = idade - idadeMelhorAmigo
console.log(diferenca)


//2

//a
const par = prompt("Escreva um número par")
Number(par)

//b
console.log(par % 2)

//c. O resultando sempre é 0 não importa o número par usado.

//d. Se o usuário usar um número ímpar o resultado sempre será 1.


//3

//a
 let listaDeTarefas = []

// //b
 const item1 = prompt("Diga")
 const item2 = prompt("tarefa 2")
 const item3 = prompt("tarefa3")

 listaDeTarefas.push(item1,item2,item3) 

// //c
 console.log( listaDeTarefas);

//d
let tarefa = prompt("Digite o índice da tarefa completada: 0, 1, 2")

//e
listaDeTarefas.splice(tarefa, 1)

//f
console.log(listaDeTarefas)


//4

const usuario = prompt ("Qual seu nome de usuário?")

const email = prompt("Qual seu endereço de e-mail atualizado?")

const cadastro = ("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + usuario+"!")

console.log(cadastro )



//DESAFIO

//1

//a
let equa = (kelvin) = (77 - 32) * 5 / 9 + 273.15
console.log(equa, "KELVIN")

//b
let equa1 = (GRAUS_FAHRENHEIT) = (80) * 9 / 5 + 32
console.log(equa1,"GRAUS_FAHRENHEIT" )

//c
let equa2 = (GRAUS_FAHRENHEIT) = (30) * 9 / 5 + 32
let equa3 = (Kelvin) = (30) + 273
console.log(equa2, "C°,", equa3, "K")

//d
let equa4 = prompt("Digite o valor em graus celsius que desejaconverter")
equa3 = (KELVIN) = Number(equa4) + 273
console.log(equa3)


//2

//a
let Qw = prompt("Coloque a o valor de Quilowatt-hora consumido")
let total = (Qw) * 0.05
//console.log("R$" + consumo)

//b
let desconto = prompt("Insira o desconto" , "%")
total = (Qw) * 0.05 - desconto/100
console.log("R$" + total)


//3

//a
let a = (20) / (2.205)
console.log(a)

//b
let b = (10.5) / (35.274)
console.log(b)

//c
let c = (100) * (1609)
console.log(c)

//d
let d = (50) / (3.281)
console.log(d)

//e
let e = (103.56) * (3.785)
console.log(e)

//f
let f = (450) / (3.52)
console.log(f)

//g
let g = (450) / (f)
let h = prompt("Dígite um valor em xic para converter em li")
let i = (h) / (g)

console.log(i)