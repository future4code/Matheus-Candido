import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ApplicationForm() {
    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    const goToList = () => {
        history.push("/trips/list")
    }
    
    return (
        <div>
            <h2>ApplicationForm</h2>
            <button onClick={goToback}>Voltar</button>
            <button onClick={goToList}>Candidatar-se</button>
        </div>
    )
}