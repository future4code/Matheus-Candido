import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ListTripsPage() {
    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    const goToForm = () => {
        history.push("/application-form")
    }
    return (
        <div>
            <h2>ListTripsPage</h2>
            <button onClick={goToback}>Voltar</button>
            <button onClick={goToForm}>Candidatar-se</button>
        </div>
    )
}