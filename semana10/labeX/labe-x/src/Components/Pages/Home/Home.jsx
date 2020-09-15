import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Home() {
    const history = useHistory()
    const goToLogin = () => {
        history.push("/adm/signin")
    }
    const goToList = () => {
        history.push("/trips/list")
    }
    return (
        <div>
            <h2>Home</h2> 
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToList}>Viajens</button>
        </div>
    )
}