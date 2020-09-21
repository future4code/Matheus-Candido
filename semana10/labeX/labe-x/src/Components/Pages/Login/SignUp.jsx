import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { ButtonLogin, InputContainer, Main, TextCenter } from './styles'

export const ButtonsMenu = styled.button`
    position: relative;
    top: -258px;
    right: -800px;
    color: #fff;
    background-color: blueviolet;
    outline: none;
    border: 1px transparent solid;;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: 1px black solid;
    }
`;

export default function SignUp() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })

    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    const goToback = () => {
        history.goBack("/adm/signin")
    }

    const doSignIn = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/login", body)
            .then(r => {
                window.localStorage.setItem("token", r.data.token)
                if (r.status) {
                    history.push("/adm/trips/create")
                }
                console.log("login feito")
            }).catch(e => {
                console.log(e)
            })
    }
    const doSignUp = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/signup", body)
            .then(r => {
                if (r.status) {
                    doSignIn()
                    history.push("/adm/trips/create")
                }
                alert("cadastro efetuado!")
            }).catch(e => {
                alert("Registro não efetuado")
                console.log(e)
            })
    }
    const handleClick = (event) => {
        event.preventDefault()
        doSignUp()
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
            <form onSubmit={handleClick}>
                <TextCenter>SignUp</TextCenter>
                <InputContainer>
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        pattern="[A-Za-z]{3,}"
                        title="No mínimo tres letras"
                        required
                    />
                    <label htmlFor="email">Email</label>
                </InputContainer>
                <InputContainer>
                    <input
                        type="password"
                        name="password"
                        // pattern="\d{3,}"
                        value={form.password}
                        onChange={handleInputChange}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]){8,}"
                        title="A senha precisa conter 1 dígito, 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e conter no mínimo 8 dos caracteres mensionados!"
                        required
                    />
                    <label htmlFor="password">Senha</label>
                </InputContainer>
                <ButtonLogin >Cadastrar</ButtonLogin>
            </form>
        </Main>
    )
}