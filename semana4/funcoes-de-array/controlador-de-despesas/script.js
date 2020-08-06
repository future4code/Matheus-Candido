
let arrayDespesas = []

function cadastro() {
    const tipoDespesa = document.getElementById("tipo")
    const valorDespesa = document.getElementById("valor")
    const descricaoDespesa = document.getElementById("descricao")
    const despesasNaTela = document.getElementById("extrato")

    if (tipoDespesa.value !== "" && valor.value !== "" && descricaoDespesa.value != "") {
        despesasNaTela.innerHTML += `<p>Valor das despesas: ${valorDespesa.value}</p> <p>${tipoDespesa.value}</p> <p>${descricaoDespesa.value}</p>`

        const dados =
        {
            tipo: tipoDespesa.value,
            valor: valorDespesa.value,
            descricao: descricaoDespesa.value
        }

        arrayDespesas.push(dados)

        console.log(arrayDespesas)
    } else {
        alert("a")
    }

}
function filtro() {

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
