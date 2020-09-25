import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react'
import axios from 'axios'
import Planner from './Planner'
import userEvent from '@testing-library/user-event'
import Tasks from '../Tasks/Tasks'
import App from '../../App'

axios.get = jest.fn().mockResolvedValue({
    data: []
})
axios.post = jest.fn().mockResolvedValue()
axios.delete = jest.fn().mockResolvedValue()

describe('Receber e Criar tarefas', () => {
    test('Testando a renderizando inicial', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: 'Segunda',
                text: 'Fernanda',
            }]
        })

        const { findByText } = render(<App />)

        const tasks = await findByText(/Fernanda/)

        expect(tasks).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')
    })

    test('Testando existencia do input', () => {
        const { getByPlaceholderText } = render(<App />)
        const input = getByPlaceholderText(/digite sua task/i)
        expect(input).toBeInTheDocument()
    })

    test('Testando se o input funciona', () => {
        const { getByPlaceholderText } = render(<App />)

        const input = getByPlaceholderText(/digite sua task/i)

        fireEvent.change(input, { target: { value: 'bananinha' } })
        expect(input).toHaveValue('bananinha')
    })

    test('Testando existencia do select', () => {
        const { getByTestId } = render(<App />)
        const select = getByTestId('select-day')
        expect(select).toBeInTheDocument()
    })

    test('Testando se o select funciona', () => {
        const { getByTestId } = render(<App />)

        const select = getByTestId('select-day')
        expect(select).toBeInTheDocument()

        fireEvent.change(select, { target: { value: 'Segunda' } })
        expect(select).toHaveValue('Segunda')
    })

    test('Testando se cria uma tarefa', async () => {
        axios.post = jest.fn().mockResolvedValue()
        axios.get = jest.fn().mockResolvedValue({
            data: []
        })
        const { getByPlaceholderText, getByText, getByTestId } = render(<App />)

        const input = getByPlaceholderText(/digite sua task/i)

        const select = getByTestId('select-day')

        const button = getByText(/Criar task/i)

        fireEvent.change(input, { target: { value: 'juninho' } })
        fireEvent.change(select, { target: { value: 'Segunda' } })

        await userEvent.type(input, 'juninho')
        await userEvent.type(select, 'Segunda')

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido', {
            text: 'juninho',
            day: 'Segunda',
        })
        wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })

})

describe('Lista de tarefas', () => {
    // test('Se o botão de deletar aparece na tela', () => {

    //     const { getByText } = render(<App />)

    //     const button = getByText(/Deletar/i)
    //     expect(button).toBeInTheDocument()
    // })
    test('Se o botão Deletar aparece na tela', async () => {

        axios.get = jest.fn().mockResolvedValue({
            data: [{
                id: '1',
                day: 'Segunda',
                text: 'junio jr',
            }]
        })

        const { findByText, getByText } = render(<App />)

        const tasks = await findByText(/junio jr/i)

        expect(tasks).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')

        wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })

        const button = getByText(/Deletar/i)
        expect(button).toBeInTheDocument()

        userEvent.click(button)

        expect(axios.delete).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/1')

        wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })


    })
    test('Se o botão Editar aparece na tela', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                id: '1',
                day: 'Segunda',
                text: 'Samira',
            }]
        })
        axios.put = jest.fn().mockResolvedValue()

        const { findByText, getByText } = render(<App />)

        const tasks = await findByText(/Samira/i)

        expect(tasks).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')

        wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })


        const button = getByText(/Editar/i)
        expect(button).toBeInTheDocument()

        userEvent.click(button)

        expect(axios.put).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/1')

        wait(() => {
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })
})