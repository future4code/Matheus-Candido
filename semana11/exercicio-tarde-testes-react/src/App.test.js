import React from "react";
import { render, fireEvent, getByText, getByRole, getByPlaceholderText, getByDisplayValue } from "@testing-library/react";
import App from "./App";


test("Testando o input que eu irei fracassar segundo o notion ' Ele acertou :( ' ", () => {
    //preparação
    const { getByRole, getByPlaceholderText, getByText } = render(<App />)

    let postInput = getByPlaceholderText(/Novo Post/i)
    const botaoAdicionar = getByText(/Adicionar/i)

    // execução
    fireEvent.change(postInput, { target: { value: "teste" } })
    fireEvent.click(botaoAdicionar)

    //verifica se o campo tem o valor
    expect(getByText(/teste/i)).toBeInTheDocument()

    //verifica se o campo tem um valor vazio
    // expect(postInput).toHaveValue("")

})