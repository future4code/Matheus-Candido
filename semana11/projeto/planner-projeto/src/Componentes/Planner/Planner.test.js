import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import App from '../../App'

//Define o mock de dados do get.
axios.get = jest.fn().mockResolvedValue({
    data: []
})
//Define o mock do post.
axios.post = jest.fn().mockResolvedValue()
//Define o mock do delete.
axios.delete = jest.fn().mockResolvedValue()

describe('Receber e Criar tarefas', () => {
    test('Testando a renderizando inicial', async () => {
        //Define o mock de dados do get.
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: 'Segunda',
                text: 'Fernanda',
            }]
        })
        //Defino em qual componente vou procurar aquio que quero testar.
        const { findByText } = render(<App />)
        //Defino uma constante que irá procurar por um texto descrito abaixo.
        const tasks = await findByText(/Fernanda/)
        //Espero que essa constante está presente no componente.
        expect(tasks).toBeInTheDocument()
        //Verifica se o caminho da requisição está certo.
        //Verifica se a lista mock é chamada.
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')
    })

    test('Testando existencia do input', () => {
        //Defino em qual componente vou procurar aquio que quero testar.
        const { getByPlaceholderText } = render(<App />)
        //Procura pelo input presente no compoente a partir de seu placeholder.
        const input = getByPlaceholderText(/digite sua task/i)
        //Espera encontrar esse input no documento.
        expect(input).toBeInTheDocument()
    })

    test('Testando se o input funciona', () => {
        //Defino em qual componente vou procurar aquio que quero testar.
        const { getByPlaceholderText } = render(<App />)
        //Procura pelo input presente no compoente a partir de seu placeholder.
        const input = getByPlaceholderText(/digite sua task/i)
        //Cria digita e seleciona valores fantasias no input e select.
        fireEvent.change(input, { target: { value: 'bananinha' } })
        //Espera que no input tenha esse valor criado acima.
        expect(input).toHaveValue('bananinha')
    })

    test('Testando existencia do select', () => {
        //Defino em qual componente vou procurar aquio que quero testar.
        const { getByTestId } = render(<App />)
        //Constante que acessa o select apartir do id presente dentro da tag de abertura no jsx.
        const select = getByTestId('select-day')
        //espera que o select esteja presente no documento.
        expect(select).toBeInTheDocument()
    })

    test('Testando se o select funciona', () => {
        //Defino em qual componente vou procurar aquio que quero testar.
        const { getByTestId } = render(<App />)
        //Constante que acessa o select apartir do id presente dentro da tag de abertura no jsx.
        const select = getByTestId('select-day')
        //espera que o select esteja presente no documento.
        expect(select).toBeInTheDocument()

        //Cria um evento teste onde ele simula a seleção de um valor no select.
        fireEvent.change(select, { target: { value: 'Segunda' } })
        //Espera que o valor fantasia selecionado acima esteja presente no documento.
        expect(select).toHaveValue('Segunda')
    })

    test('Testando se cria uma tarefa', async () => {
        //Define o mock de dados do post.
        axios.post = jest.fn().mockResolvedValue()
        //Define o mock de dados do get.
        axios.get = jest.fn().mockResolvedValue({
            data: []
        })
        //Defino em qual componente vou procurar aquio que quero testar.
        const { getByPlaceholderText, getByText, getByTestId } = render(<App />)
        //Procura pelo input presente no compoente a partir de seu placeholder.
        const input = getByPlaceholderText(/digite sua task/i)
        //Constante que acessa o select apartir do id presente dentro da tag de abertura no jsx.
        const select = getByTestId('select-day')
        //Procura no componente o botão com o mesmo nome abaixo.
        const button = getByText(/Criar task/i)

        //Cria digita e seleciona valores fantasias no input e select.
        fireEvent.change(input, { target: { value: 'juninho' } })
        fireEvent.change(select, { target: { value: 'Segunda' } })

        //Aguarda uma resposta do usuario digitar no input e selecionar algo no select, os mesmos valores selecionados acima.
        await userEvent.type(input, 'juninho')
        await userEvent.type(select, 'Segunda')

        //Simula o click do usuario no botão Criar Task.
        userEvent.click(button)

        /*Verifica se após o click acima do usuário, 
        o método post fantasia(mock) é executado e enviado corretamente com os valores definidos logo acima pelo user event nas linhas 93/94.*/
        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido', {
            text: 'juninho',
            day: 'Segunda',
        })
        //Verifica se a requisição está sendo chamada um número determinado de vezes.
        wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })
})

describe('Lista de tarefas', () => {
    test('Se o botão Deletar aparece na tela e se ele funciona', async () => {
        //Define o mock de dados do delete.
        axios.delete = jest.fn().mockResolvedValue({})
        //Define o mock de dados do get.
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                id: '1',
                day: 'Segunda',
                text: 'junio jr',
            }]
        })

        //Seleciona qual componente ele vai renderizar.
        const { findByText, getByText } = render(<App />)

        //Procura pelo texto na tela
        const tasks = await findByText(/junio jr/i)

        //Espera encontrar os valores procurados por texto na constante acima.
        expect(tasks).toBeInTheDocument()
        //Verifica se o caminho da requisição está certo.
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')

        //Verifica se a requisição está sendo chamada um número determinado de vezes.
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })

        //Verifica se o botão está na tela. Obs: Usando apenas '' ele procura exatamente o mesmo nome presente no documento.
        const button = getByText('Deletar')
        expect(button).toBeInTheDocument()

        //Simula o click do usuario no botão delete.
        userEvent.click(button)

        //Verifica se o botão deleta a tarefa.
        expect(axios.delete).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/1')

        //Verifica se a requisição está sendo chamada um número determinado de vezes.
        await wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })
})