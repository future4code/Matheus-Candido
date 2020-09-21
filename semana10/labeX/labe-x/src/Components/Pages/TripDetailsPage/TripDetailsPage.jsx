import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useProtectTripDetailsPage } from '../../ProtectedRoute/ProtectTripDetailsPage'
import styled from "styled-components";
import { useTripList } from '../../Hooks/useTripsList'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Main, Div, Buttons } from './styles'
import Candidates from './Candidates/Candidates'

// const Main = styled.div`
// /* min-height: 100vh; */
// color: white;
// h2{
//     margin: 0;
//     padding: 20px 0;
// }
// `;


export default function TripDetailsPage() {
    // const trips = useTripList()
    const pathParams = useParams()
    const [trip, setTrip] = useState([])
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }
    const goToBack = () => {
        history.back()
    }
    const getTripDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(r => {
            setTrip(r.data.trip)
        }).catch(e => {
            console.log(e)
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
                    <p><b>Nome:</b> {trip.name}</p>
                    <p><b>Planeta:</b> {trip.planet}</p>
                    <p><b>Duração:</b> {trip.durationInDays} dias</p>
                    <p><b>Descrição:</b> {trip.description}</p>
                </Div>
                <div>
                    <Candidates />
                </div>
            </div>
        </Main>
    )
}