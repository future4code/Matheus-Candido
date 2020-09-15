import React from 'react'
import { useHistory } from 'react-router-dom'


export default function SignUp() {
    const history = useHistory()
    const goToCreateTrips = () => {
        history.push("/adm/trips/create")
    }
    const goToback = () => {
        history.goBack("/adm/signin")
    }
    return (
        <div>
            <h2>SignUp</h2>
            <button onClick={goToCreateTrips}>Cadastrar</button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}