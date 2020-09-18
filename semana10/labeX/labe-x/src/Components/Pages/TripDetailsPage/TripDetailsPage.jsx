import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectTripDetailsPage } from '../../ProtectedRoute/ProtectTripDetailsPage'
import styled from "styled-components";
const Main = styled.div`
/* min-height: 100vh; */
h2{
    margin: 0;
    padding: 20px 0;
}
`;


export default function TripDetailsPage() {
    const pathParams = useParams()


    const [trip, setTrip] = useState([])
    const [candidates, setCandidates] = useState([])

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
            // setCandidates(r.data.trip.candidates)
        }).catch(e => {
            console.log(e)

        })

    }

    const verifica = () => {
        if (token) {
            alert("Voce já esta logado")

        } else { history.goBack() }

    }
    // const trips = trip.candidates

    useEffect(() => {
        getTripDetail()

    }, [])
    useProtectTripDetailsPage(getTripDetail)

    return (

        <Main>
            <h2>TripDetailsPage</h2>
            <button onClick={verifica}>Voltar</button>
            <button onClick={goToHome}>Home</button>
            <div >

                <li>Name: {trip.name}</li>
                <li>Planet: {trip.planet}</li>
                <li>Duration: {trip.durationInDays}</li>
                <li>Description: {trip.description}</li>
                {candidates.map((c) => {
                    return (
                        <div>
                            <li>{trip.name}</li>
                        </div>
                    )
                })}
            </div>
        </Main>
    )
}