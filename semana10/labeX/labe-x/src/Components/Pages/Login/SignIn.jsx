import React from 'react'
import { useHistory } from 'react-router-dom'


export default function SignIn() {
    const history = useHistory()
    const goToCreateTrips = () => {
        history.push("/adm/trips/create")
    }
    const goToback = () => {
        history.goBack()
    }
    const goToSignUp = () => {
        history.push("/adm/signup")
    }
    return (
        <div>
            <h2>SignIn</h2>
            <button onClick={goToCreateTrips}>Logar</button>
            <button onClick={goToSignUp}>Cadastre-se</button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}