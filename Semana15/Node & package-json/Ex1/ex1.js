/*
1) 
a) Dando o comando inicial e o parametro, ex: node index.js NomeDoParametro
*/

//b)
const name = process.argv[2]
const idade = Number(process.argv[3])

if ((typeof (name) === String) && (typeof (idade) !== Number)) {
    console.log("Parametro errado")
    console.log(typeof (idade))
} else {
    console.log(`Olá, ${name}! Você tem ${idade} anos.`)
}



//c)
// const name = process.argv[2]
// const idade = Number(process.argv[3])

// console.log(colors.red(`Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`))
