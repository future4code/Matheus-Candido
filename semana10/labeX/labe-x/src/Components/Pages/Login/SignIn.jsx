import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'

export default function SignIn() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })

    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    const goToSignUp = () => {
        history.push("/adm/signup")
    }
    const doSignIn = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/login", body)
            .then(r => {
                window.localStorage.setItem("token", r.data.token)
                alert("Login feito")
                history.push("/adm/trips/create")
                console.log(r)
            }).catch(e => {
                alert("Login invalido")
                console.log(e)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        doSignIn()
        console.log(form.email)
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    return (
        <div>
            <h2>SignIn</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    pattern="[A-Za-z]{3,}"
                    title= "No mínimo tres letras"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    pattern=""
                    required
                />
                <button >Logar</button>
            </form>


            <button onClick={goToSignUp}>Cadastre-se</button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}