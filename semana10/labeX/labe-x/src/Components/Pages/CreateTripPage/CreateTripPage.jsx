import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectCreateTripPage } from '../../ProtectedRoute/ProtectCreateTripPage'

export default function CreateTripPage() {
    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const goToHome = () => {
        history.push("/")
    }
    const goToList = () => {
        history.push("/trips/list")
    }
    const verifica = () => {
        if (token) {
            alert("Voce já esta logado")
        } else { history.goBack() }
    }
    useProtectCreateTripPage()
    return (
        <div>
            <h2>CreateTripPage</h2>
            <button onClick={goToList}>Criar Viajem</button>
            <button onClick={verifica}>Voltar</button>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}