const colors = require('colors');

//3)
const tarefas = [
    "Lavar louça",
    "adas"
]

const tarefa = process.argv[2]
tarefas.push(tarefa)
console.log(colors.red("Tarefa adicionada com sucesso!", tarefas))

