import React from 'react'
import { useHistory } from 'react-router-dom'
import { Main } from './style'

export default function ErrorPage() {
    const history = useHistory()

    const goToPosts = () => {
        history.push('/')
    }
    return (
        <Main>
            <div>
                <h2>Url não encontrada!</h2>
                <p>Verifique a url ou vá para a página inicial.</p>
                <button onClick={goToPosts}>Página inicial</button>
            </div>
        </Main>
    )
}