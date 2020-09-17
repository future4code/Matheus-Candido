import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ListTripsPage() {
    const [trips, setTrips] = React.useState([])
    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const goToback = () => {
        history.goBack()
    }
    const goToHome = () => {
        history.push("/")
    }
    const goToDetailsTrip = () => {
        if (token) {
            history.push("/trips/details")
        } else {
            // alert("Área restrita")
            history.push("/adm/signin")
        }
    }

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trips")
            .then(r => {
                console.log(r.data.trips)
                setTrips(r.data.trips)
            })
    }

    React.useEffect(() => {
        getTrips()
    }, [])

    return (
        <div>
            <h2>ListTripsPage</h2>
            <button onClick={goToback} >Voltar</button>
            <button onClick={goToDetailsTrip}>Detalhes</button>
            <button onClick={goToHome}>Home</button>
            {trips.map(t => {
                return (
                    <div key={t.id}>
                        <li id={t.id}> {t.name}</li>
                    </div>
                )
            })}
        </div>
    )
}