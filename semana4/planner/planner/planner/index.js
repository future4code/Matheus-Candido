

function criarTarefa() {
    let inputTarefa = document.getElementById("tarefa") //2
    let valorTarefa = inputTarefa.value

    const domingo = document.getElementById("domingo")
    const segunda = document.getElementById("segunda")
    const terca = document.getElementById("terca")
    const quarta = document.getElementById("quarta")
    const quinta = document.getElementById("quinta")
    const sexta = document.getElementById("sexta")
    const sabado = document.getElementById("sabado")


    let dias = document.getElementById("dias-semana").value


    //FORMULA COM IF/ELSE:
    // if (dias === "domingo") {
    //     domingo.innerHTML += `<p>${inputTarefa}</p>`
    // }
    // else if (dias === "segunda") {
    //     segunda.innerHTML += `<p>${inputTarefa}</p>`
    // }
    // else if (dias === "terca") {
    //     terca.innerHTML += `<p>${inputTarefa}</p>`
    // }
    // else if (dias === "quarta") {
    //     quarta.innerHTML += `<p>${inputTarefa}</p>`
    // }
    // else if (dias === "quinta") {
    //     quinta.innerHTML += `<p>${inputTarefa}</p>`
    // }
    // else if (dias === "sexta") {
    //     sexta.innerHTML += `<p>${inputTarefa}</p>`
    // }
    // else if (dias === "sabado") {
    //     sabado.innerHTML += `<p>${inputTarefa}</p>`
    // }


    //FORMULA COM SWITCH CASE:
    if (valorTarefa !== "") {


        switch (dias) {
            case "domingo":
                domingo.innerHTML += `<p ${onclick = "riscarTarefa()"}>${valorTarefa}</p>`
                break;
            case "segunda":
                segunda.innerHTML += `<p>${valorTarefa}</p>`
                break;
            case "terca":
                terca.innerHTML += `<p>${valorTarefa}</p>`
                break;
            case "quarta":
                quarta.innerHTML += `<p>${valorTarefa}</p>`
                break;
            case "quinta":
                quinta.innerHTML += `<p>${valorTarefa}</p>`
                break;
            case "sexta":
                sexta.innerHTML += `<p>${valorTarefa}</p>`
                break;
            case "sabado":
                sabado.innerHTML += `<p>${valorTarefa}</p>`
                break;
            default:
                break;
        }
    } else {
        alert("Digite um valor para criar uma nova tarefa!")
    } inputTarefa.value = ""
}

function riscarTarefa(elemento) {
    const limpar = document.getElementsByTagName("p")
}

function limparTarefa() {
    const limpar = document.getElementsByClassName("dias")
    limpar.parentNode.removeChild(limpar.firstChild)

}