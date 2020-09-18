import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectCreateTripPage } from '../../ProtectedRoute/ProtectCreateTripPage'
import useForm from '../../Hooks/useForm'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CreateTripPage() {
    const { form, onChange, resetState } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    const [selectPlanets, setSelectPlanets] = useState([])

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const goToHome = () => {
        history.push("/")
    }
    const goToList = () => {
        history.push("/trips/list")
    }
    const verifica = () => {
        if (token) {
            alert("Voce já esta logado")
        } else { history.goBack() }
    }

    const createTrip = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trips", body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((r) => {
            console.log(r)
        }).catch((e) => {
            console.log(e)
        })
    }
    const getPlanets = () => {
        // axios.get("https://api.nasa.gov/planetary/apod?api_key=P2aW4dKXtMPt7C1tQA75MwVRlm7F3NaLGO7O4HN7")
        axios.get("https://api.le-systeme-solaire.net/rest/bodies")
            .then((r) => {
                setSelectPlanets(r.data.bodies)
                console.log(r.data.bodies)
            }).catch((e) => {
                console.log(e)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createTrip()
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }
    useEffect(() => {
        getPlanets()
    }, [])
    useProtectCreateTripPage()
    return (
        <div>
            <h2>CreateTripPage</h2>
            <button onClick={goToList}>Criar Viajem</button>
            <button onClick={verifica}>Voltar</button>
            <button onClick={goToHome}>Home</button>

            <form onSubmit={handleSubmit}>
                <input
                    type="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    // pattern="(\D{5,}\s*)"
                    required
                />
                <select
                    type="planet"
                    name="planet"
                    value={form.planet}
                    onChange={handleInputChange}
                    placeholder="Planet"
                    required
                >
                    {selectPlanets.map((p) => {
                        if (p.isPlanet === true) {
                            return (
                                <option key={p.name}>{p.name}</option>
                            )
                        }
                    })}
                </select>
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleInputChange}
                    placeholder="Date"
                    pattern={"/ (d{2})/d{2}/d{2021,}"}
                    required
                />
                <input
                    type="description"
                    name="description"
                    value={form.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    pattern="(\D{5,}\s*)"
                    required
                />
                <input
                    type="number"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={handleInputChange}
                    placeholder="Duration"
                    min={0}
                    required
                />
                <button>Criar</button>
            </form>

        </div>
    )
}