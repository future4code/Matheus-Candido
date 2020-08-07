
let arrayDespesas = []






function cadastro() {

    const tipoDespesa = document.getElementById("tipo")
    const valorDespesa = document.getElementById("valor")
    const descricaoDespesa = document.getElementById("descricao")
    const despesasNaTela = document.getElementById("lista-despesas")


    if (tipoDespesa.value !== "" && valorDespesa.value !== "" && descricaoDespesa.value != "") {

        const dados =
        {
            tipo: tipoDespesa.value,
            valor: Number(valorDespesa.value),
            descricao: descricaoDespesa.value,

        }
        console.log(dados)

        arrayDespesas.push(dados)
        console.log(arrayDespesas)


        arrayDespesas.forEach((despesas) => {
            despesasNaTela.innerHTML += `<p>Valor das despesas: <li>${despesas.tipo}</li></p> <p><li>R$: ${despesas.valor}</li></p> <p><li>${despesas.descricao}</li></p>`
        })
        console.log(despesasNaTela)

    } else {
        alert("Preencha todos os campos !!!")
    }

}


function filtrar() {
    const valorMin = Number(document.getElementById("valorMin"))
    const valorMax = Number(document.getElementById("valorMax"))
    const despesasNaTela = document.getElementById("lista-despesas")


    const nvArray = arrayDespesas.filter((despesas) => {
        return despesas.tipo === tipo && despesas.valor <= valorMax.value && despesas.valor >= valorMin.value
    })

    despesasNaTela.innerHTML = ""

    nvArray.forEach((despesas) => {
        despesasNaTela.innerHTML += `<p>Valor das despesas: <li>${despesas.tipo}</li></p> <p><li>${despesas.valor}</li></p> <p><li>${despesas.descricao}</li></p>`
    })
    console.log(despesasNaTela)

}

function limpar() {
    valor.value = ""
    descricao.value = ""
    tipo.value = ""
}



function botao() {
    cadastro()
    limpar()
}
