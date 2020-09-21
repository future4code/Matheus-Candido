import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectCreateTripPage } from '../../ProtectedRoute/ProtectCreateTripPage'
import useForm from '../../Hooks/useForm'
import { useEffect } from 'react'
import { useState } from 'react'
import { ButtonLogin, InputContainer, Main, FormContainer, TextCenter, ButtonMenu } from './styles'

export default function CreateTripPage() {
    const { form, onChange, resetState } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    const [selectPlanets, setSelectPlanets] = useState([])
    const date = new Date("2021")

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
        <Main>
            <div>
                <FormContainer>
                    <ButtonMenu onClick={goToList}>Viajens existentes</ButtonMenu>
                    <ButtonMenu onClick={verifica}>Voltar</ButtonMenu>
                    <ButtonMenu onClick={goToHome}>Home</ButtonMenu>
                    <form onSubmit={handleSubmit}>
                        <TextCenter>Create Trip Page</TextCenter>
                        <InputContainer>
                            <input
                                type="name"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                                pattern="(\D{5,}\s*)"
                                required
                            />
                            <label htmlFor="name">Nome da viajem</label>
                        </InputContainer>
                        <InputContainer>
                            <select
                                type="planet"
                                name="planet"
                                value={form.planet}
                                onChange={handleInputChange}
                                required
                            >
                                <option value={undefined} key={undefined}>Selecione um país</option>
                                {selectPlanets.map((p) => {
                                    if (p.isPlanet === true) {
                                        return (
                                            <option key={p.name}>{p.name}</option>
                                        )
                                    }
                                })}
                            </select>
                        </InputContainer>
                        <InputContainer>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleInputChange}
                                pattern="dd/mm/yyyy"
                                min="01/12/2021"
                                required
                            />
                            <label htmlFor="date">Data</label>

                        </InputContainer>
                        <InputContainer>
                            <input
                                type="description"
                                name="description"
                                value={form.description}
                                onChange={handleInputChange}
                                // pattern="(\D{5,}\s*)"
                                title="lala"
                                required
                            />
                            <label htmlFor="description">Description</label>

                        </InputContainer>
                        <InputContainer>
                            <input
                                type="number"
                                name="durationInDays"
                                value={form.durationInDays}
                                onChange={handleInputChange}
                                min={0}
                                required
                            />
                            <label htmlFor="number">Duration</label>

                        </InputContainer>

                        <ButtonLogin>Criar</ButtonLogin>
                    </form>
                </FormContainer>
            </div>



        </Main>
    )
}