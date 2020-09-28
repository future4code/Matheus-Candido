import React from 'react'
import { render } from '@testing-library/react'

import Loader from './Loader'

describe('Testando a renderização do loading', () => {
    test('Procurando pelo aequivo de imagem', () => {
        //Em qual componente eu procuro
        const { findAllByTestId } = render(<Loader />)
        //O que eu procuro
        // const animation = findByTestId(/animation-svg/)
        //Procurando se ele se encontra na tela, porém não soube como procurar algo que tem um tempo para estar.
        // expect(animation).toBeInTheDocument()
    })
})