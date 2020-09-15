import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ApplicationForm() {
    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    return (
        <div>
            <h2>ApplicationForm</h2>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}