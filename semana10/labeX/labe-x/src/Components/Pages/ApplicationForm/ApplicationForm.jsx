import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import styled from "styled-components";
import { Main, FormContainer, InputContainer, ButtonLogin, ButtonMenu } from './styles'


export default function ApplicationForm() {
    const { form, onChange, resetState } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [selectCountry, setSelectCountry] = useState([])
    const pathParams = useParams()
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }
    const goToback = () => {
        history.goBack()
    }

    const applyTrip = () => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/trips/${pathParams.id}/apply`, body)
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
        <Main>
            <h2>Formulário de inscrição</h2>
            <div>
                <ButtonMenu onClick={goToback}>Voltar</ButtonMenu>
                <ButtonMenu onClick={goToHome}>Home</ButtonMenu>
            </div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <InputContainer>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            // pattern=""
                            required
                        />
                        <label htmlFor="name">Nome</label>
                    </InputContainer>
                    <InputContainer>
                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleInputChange}
                            // pattern=""
                            required
                        />
                        <label htmlFor="age">Idade</label>
                    </InputContainer>
                    <InputContainer>
                        <input
                            type="text"
                            name="applicationText"
                            value={form.applicationText}
                            onChange={handleInputChange}
                            // pattern=""
                            required
                        />
                        <label htmlFor="applicationText">Descrição</label>
                    </InputContainer>
                    <InputContainer>
                        <input
                            type="text"
                            name="profession"
                            value={form.profession}
                            onChange={handleInputChange}
                            // pattern=""
                            required
                        />
                        <label htmlFor="profession">Profissão</label>
                    </InputContainer>
                    <InputContainer>
                        <select
                            type="text"
                            name="country"
                            value={form.country}
                            onChange={handleInputChange}
                            // pattern=""
                            required
                        >
                            {selectCountry.map((c) => {
                                return (
                                    <option key={c.name}>{c.name}</option>
                                )
                            })}
                        </select>
                        <label htmlFor="country">País</label>
                    </InputContainer>
                    <ButtonLogin>Se inscrever</ButtonLogin>
                </form>
            </FormContainer>
        </Main>
    )
}