import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { Main, TextCenter, InputContainer, ButtonLogin, SpanSignUp, ButtonsMenu } from './styles'

export default function SignIn() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }
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
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    return (
        <Main>
            <div>
                <ButtonsMenu onClick={goToback}>Voltar</ButtonsMenu>
                <ButtonsMenu onClick={goToHome}>Home</ButtonsMenu>
            </div>
            <form onSubmit={handleSubmit}>
                <TextCenter>SignIn</TextCenter>
                <InputContainer>
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        // pattern="[A-Za-z]{3,}"
                        // title="No mínimo tres letras"
                        required
                    />
                    <label htmlFor="email">Email</label>
                </InputContainer>

                <InputContainer>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="password">Senha</label>
                </InputContainer>
                <ButtonLogin >Logar</ButtonLogin>
            </form>
            <SpanSignUp onClick={goToSignUp}>Não é cadastrado? </SpanSignUp>
        </Main>
    )
}