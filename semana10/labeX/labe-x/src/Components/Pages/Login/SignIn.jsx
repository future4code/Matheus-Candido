import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'


export default function SignIn() {
    const [emailValue, setEmail] = React.useState()
    const [passwordValue, setPassword] = React.useState()

    const history = useHistory()
    const goToback = () => {
        history.goBack()
    }
    const goToSignUp = () => {
        history.push("/adm/signup")
    }
    const DoSignIn = () => {
        const body = {
            email: emailValue,
            password: passwordValue
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
    
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <h2>SignIn</h2>
            <input type="email" value={emailValue} onChange={inputEmail} />
            <input type="password" value={passwordValue} onChange={inputPassword} />
            <button onClick={DoSignIn}>Logar</button>
            <button onClick={goToSignUp}>Cadastre-se</button>
            <button onClick={goToback}>Voltar</button>
        </div>
    )
}