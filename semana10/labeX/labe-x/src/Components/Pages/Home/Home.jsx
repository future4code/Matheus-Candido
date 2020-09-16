import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const goToList = () => {
        history.push("/trips/list")
    }
    const verifica = () => {
        if (token) {
            history.push("/adm/trips/create")
        } else {
            history.push("/adm/signin")
        }
    }
    return (
        <div>
            <h2>Home</h2>
            {token ? <button onClick={verifica}>usuario</button> : <button onClick={verifica}>Login</button>}
            <button onClick={goToList}>Viajens</button>
        </div>
    )
}