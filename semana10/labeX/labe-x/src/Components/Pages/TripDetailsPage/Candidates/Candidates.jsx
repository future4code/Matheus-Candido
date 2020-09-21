import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTripList } from '../../../Hooks/useTripsList'



export default function Candidates() {
    const trips = useTripList()
    const pathParams = useParams()
const [candidates, setCandidates] = useState([])
    const getCandidates = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(r => {
            setCandidates(r.data.trip.candidates)
            // console.log(r.data.trip)
        }).catch(e => {
            console.log(e)

        })

    }

    useEffect(()=>{
        getCandidates()
    })
    return (
        <div>
            {candidates.map((t) => {
                return (
                    <div>
                        {t.name}
                    </div>
                )
            })}
        </div>
    )
}