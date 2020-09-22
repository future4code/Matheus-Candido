import React from "react";
import { render, fireEvent, getByText, getByRole, getByPlaceholderText, getByDisplayValue } from "@testing-library/react";
import App from "./App";


test("Testando o input que eu irei fracassar segundo o notion", () => {
    //preparação
    const { getByRole, getByPlaceholderText } = render(<App />)

    let postInput = getByRole('textbox', {name: /Novo Post/i})
    fireEvent.change(postInput)
    expect(postInput).toEqual(true)

    // const botaoAdicionar = getByText(/Adicionar/i)

    //execução
    // fireEvent.click(botaoAdicionar)
    // const novoPost = getByText(post)
    // expect(botaoAdicionar).toContainElement(novoPost)
    //verificação

})