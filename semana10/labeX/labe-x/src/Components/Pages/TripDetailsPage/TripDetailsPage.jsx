import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectTripDetailsPage } from '../../ProtectedRoute/ProtectTripDetailsPage'

export default function TripDetailsPage() {
    const history = useHistory()

    const goToForm = () => {
        history.push("/application-form")
    }
    const goToHome = () => {
        history.push("/")
    }
    const token = window.localStorage.getItem("token")
    const getTripDetail = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trip/BqsDXx1bjpo5ujlWNWJz", {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(r => {
            console.log(r.data.trip)
        }).catch(e => {
            console.log(e)
        })
    }

    const verifica = () => {
        if (token) {
            alert("Voce já esta logado")
        } else { history.goBack() }
    }
    useProtectTripDetailsPage(getTripDetail)
    return (
        <div>
            <h2>TripDetailsPage</h2>
            <button onClick={verifica}>Voltar</button>
            <button onClick={goToForm}>Ser um candidato</button>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}