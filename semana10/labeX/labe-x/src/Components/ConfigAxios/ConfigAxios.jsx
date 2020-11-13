import axios from "axios"
import { useHistory } from 'react-router-dom'

const history = useHistory()
export const DoSignUp = (emailValue,passwordValue) => {
    const body = {
        email: emailValue,
        password: passwordValue
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-jackson/signup", body)
        .then(r => {
            // window.localStorage.setItem("token", response.data.token)
            if (r.status) {
                history.push("/adm/trips/create")
            }
            console.log("cadastro feito")
        }).catch(e => {
            alert("Registro não efetuado")
            console.log(e)
        })
}
export const DoSignIn = (emailValue,passwordValue) => {
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