import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
// import { DoSignIn, DoSignUp } from '../../ConfigAxios/ConfigAxios'

export default function SignUp() {
    const [emailValue, setEmail] = React.useState()
    const [passwordValue, setPassword] = React.useState()

    const history = useHistory()
    const goToback = () => {
        history.goBack("/adm/signin")
    }
    const DoSignUp = () => {
        const body = {
            email: emailValue,
            password: passwordValue
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/signup", body)
            .then(r => {
                if (r.status) {
                    history.push("/adm/trips/create")
                }
                console.log("cadastro feito")
            }).catch(e => {
                alert("Registro não efetuado")
                console.log(e)
            })
    }
    const DoSignIn = () => {
        const body = {
            email: emailValue,
            password: passwordValue
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
    const cad = () => {
        DoSignUp()
        DoSignIn()
    }
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <h2>SignUp</h2>
            <input type="email" value={emailValue} onChange={inputEmail} />
            <input type="password" value={passwordValue} onChange={inputPassword} />
            <button onClick={cad}>Cadastrar</button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}