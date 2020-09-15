import React from 'react'
import { useHistory } from 'react-router-dom'


export default function TripDetailsPage() {
    const history = useHistory()
    
    const goToback = () => {
        history.goBack()
    }
    const goToForm = () => {
        history.push("/application-form")
    }
    return (
        <div>
            <h2>TripDetailsPage</h2>
            <button onClick={goToback}>Voltar</button>
            <button onClick={goToForm}>Ser um candidato</button>
        </div>
    )
}