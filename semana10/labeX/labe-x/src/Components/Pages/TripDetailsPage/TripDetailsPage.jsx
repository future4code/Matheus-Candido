import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectTripDetailsPage } from '../../ProtectedRoute/ProtectTripDetailsPage'
import 'react-multi-carousel/lib/styles.css';
import { Main, Div, Buttons } from './styles'
import Candidates from './Candidates/Candidates'

export default function TripDetailsPage() {
    const pathParams = useParams()
    const [trip, setTrip] = useState([])
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }
    const goToBack = () => {
        history.goBack()
    }
    const getTripDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(r => {
            setTrip(r.data.trip)
            // console.log(r.data.trip.candidates)
        }).catch(e => {
            console.log(e)
        })
    }

    const decideCandidate = (approve, candidateId) => {
        const body = {
            approve: approve
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trips/${pathParams.id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then(() => {
            getTripDetail()
        })
    }
    useEffect(() => {
        getTripDetail()
    }, [])
    useProtectTripDetailsPage(getTripDetail)
    return (
        <Main>
            <span>TripDetailsPage</span>
            <div>
                <Div>
                    <Buttons onClick={goToBack}>Voltar</Buttons>
                    <Buttons onClick={goToHome}>Home</Buttons>
                    <p><b>Nome da viajem:</b> {trip.name}</p>
                    <p><b>Planeta:</b> {trip.planet}</p>
                    <p><b>Duração:</b> {trip.durationInDays} dias</p>
                    <p><b>Descrição:</b> {trip.description}</p>
                </Div>
                {trip ?
                    <div>
                        <Candidates candidates={trip.candidates} 
                        decideCandidate={decideCandidate}
                        />
                    </div>
                    : <div>Carregando..</div>}
            </div>
        </Main>
    )
}