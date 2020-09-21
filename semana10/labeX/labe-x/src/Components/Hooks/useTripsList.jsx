import axios from "axios"
import { useEffect, useState } from "react"

export const useTripList = () => {
    const [trips, setTrip] = useState([])
    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trips/')
            .then((r) => {
                setTrip(r.data.trips)
                console.log(r.data.trips)
            }).catch((e)=>{
                console.log(e)
            })
    }, [])
    return trips
}