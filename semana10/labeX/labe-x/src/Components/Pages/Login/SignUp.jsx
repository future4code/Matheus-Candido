import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { DoSignIn, DoSignUp } from '../../ConfigAxios/ConfigAxios'
import useForm from '../../Hooks/useForm'

export default function SignUp() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })

    const history = useHistory()
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
                console.log("cadastro feito")
            }).catch(e => {
                alert("Registro não efetuado")
                console.log(e)
            })
    }
    const handleClick = (event) => {
        event.preventDefault()
        doSignUp()
        console.log(form.email)
        resetState()
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    return (
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleClick}>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="password"
                    pattern="\d{3,}"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}"
                    title="A senha precisa conter 1 dígito, 1 letra maiúscula, 1 letra minúscula, 1 caractere especial e conter no mínimo 8 dos caracteres mensionados!"
                    required
                />
                <button >Cadastrar</button>
            </form>

            <button onClick={goToback}>Voltar</button>
        </div>
    )
}