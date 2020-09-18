import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'


export default function ApplicationForm() {
    const { form, onChange, resetState } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [selectCountry, setSelectCountry] = useState([])
    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    const goToList = () => {
        history.push("/trips/list")
    }

    const applyTrip = () => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trips/5kFEwLTbmSrczYw7ppTA/apply", body)
            .then((r) => {
                console.log(r)
            }).catch((e) => {
                console.log(e)
            })
    }

    const getCountry = () => {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then((r) => {
                setSelectCountry(r.data)
                console.log(r.data)
            }).catch((e) => {
                console.log(e)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        applyTrip()
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }
    useEffect(() => {
        getCountry()
    }, [])
    return (
        <div>
            <h2>ApplicationForm</h2>
            <button onClick={goToback}>Voltar</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    // pattern=""
                    placeholder="Name"
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleInputChange}
                    // pattern=""
                    placeholder="Age"
                    required
                />
                <input
                    type="text"
                    name="applicationText"
                    value={form.applicationText}
                    onChange={handleInputChange}
                    // pattern=""
                    placeholder="Text"
                    required
                />
                <input
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={handleInputChange}
                    // pattern=""
                    placeholder="Profession"
                    required
                />
                <select
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    // pattern=""
                    placeholder="Country"
                    required
                >
                    {selectCountry.map((c) => {
                        return (
                        <option value={c.name}>{c.name}</option>
                        )
                    })}
                </select>
                <button>Se inscrever</button>
            </form>
        </div>
    )
}