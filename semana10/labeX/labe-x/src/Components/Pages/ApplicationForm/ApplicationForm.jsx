import React from 'react'

export default function ApplicationForm() {
    const goToback = () => {
        history.goBack()
    }
    return (
        <div>
            <h2>ApplicationForm</h2>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}