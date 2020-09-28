import React from 'react'
import { render } from '@testing-library/react'
import Loader, { done } from './Loader'

describe('Testando a renderização do loading', () => {
    test('Procurando pelo arquivo de imagem', () => {
        //Em qual componente eu procuro
        const { container, findByTestId } = render(<Loader />)
        //Pego o meu estado que está no componente Loader.
        const state = done
        //Verifico se no estado inicial é undefined como eu defini lá no componente.
        expect(state).toEqual(undefined)
        //O que eu procuro.
        const animation = findByTestId(/animation-svg/)
        //Ele se encontra como undefined pois é sempre verificado após o tempo do setTimeOut, e o conteúdo deixa de existir no documento.
        expect(animation.innerHTML).toEqual(undefined)
        //Procurando se ele se encontra na tela, porém não soube como procurar algo que tem um tempo para estar.
    })
})