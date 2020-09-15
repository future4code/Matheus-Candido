import React from 'react'
import { useHistory } from 'react-router-dom'


export default function TripDetailsPage() {
    const history = useHistory()
    const goToLogin = () => {
        history.push("/adm/signin")
    }
    const goToback = () => {
        history.goBack()
    }
    return (
        <div>
            <h2>TripDetailsPage</h2>
            <button></button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}