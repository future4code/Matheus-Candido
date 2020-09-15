import React from 'react'
import { useHistory } from 'react-router-dom'


export default function CreateTripPage() {
    const history = useHistory()
    const goToList = () => {
        history.push("/trips/list")
    }
    const goToback = () => {
        history.goBack()
    }
    return (
        <div>
            <h2>CreateTripPage</h2>
            <button onClick={goToList}>Criar Viajem</button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}