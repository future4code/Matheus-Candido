import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ListTripsPage() {
    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    const goToDetails = () => {
        history.push("/trips/details")
    }
    return (
        <div>
            <h2>ListTripsPage</h2>
            <button onClick={goToback}>Voltar</button>
            <button onClick={goToDetails}>Detalhes</button>
        </div>
    )
}