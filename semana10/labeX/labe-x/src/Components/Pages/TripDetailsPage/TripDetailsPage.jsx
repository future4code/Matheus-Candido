import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectTripDetailsPage } from '../../ProtectedRoute/ProtectTripDetailsPage'

export default function TripDetailsPage() {
    const pathParams = useParams()
    // const [id, setid] = useState([])
    // const [planet, setplanet] = useState([])
    // const [durationInDays, setdurationInDays] = useState(Number(""))
    // const [date, setdate] = useState([])
    // const [name, setname] = useState([])
    // const [description, setdescription] = useState([])
    // const [candidates, setcandidates] = useState([])

    const [trip, setTrip] = useState([])

    const history = useHistory()

    const goToForm = () => {
        history.push("/application-form")
    }
    const goToHome = () => {
        history.push("/")
    }
    const token = window.localStorage.getItem("token")
    const getTripDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(r => {
            setTrip(r.data.trip)

            //     setid(r.data.trip.id)
            //     setplanet(r.data.trip.planet)
            //     setdurationInDays(r.data.trip)
            //     setdate(r.data.trip.date)
            //     setname(r.data.trip.name)
            //     setdescription(r.data.trip.description)
            //     setcandidates(r.data.trip.candidates)

            // console.log(r.data.trip)
            // console.log(details)
        }).catch(e => {
            console.log(e)

        })

    }

    const verifica = () => {
        if (token) {
            alert("Voce já esta logado")

        } else { history.goBack() }

    }

    useEffect(() => {
        getTripDetail()

    }, [])
    useProtectTripDetailsPage(getTripDetail)

    return (

        <div>
            <h2>TripDetailsPage</h2>
            <button onClick={verifica}>Voltar</button>
            <button onClick={goToForm}>Ser um candidato</button>
            <button onClick={goToHome}>Home</button>
            <div >
                {trip.name}

                {/* {trip.candidates{candidates.map((c) => {
                    return (
                        <div>
                            {c.name}
                        </div>
                    )
                })}} */}
            </div>
        </div>
    )
}