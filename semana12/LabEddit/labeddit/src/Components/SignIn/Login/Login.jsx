import axios from 'axios'
import React from 'react'
import useForm from '../../../CustomHooks/Forms/useForm'

export default function Login() {

    const { form, onChange, resetState } = useForm({ email: '', password: '' })
    const postLogin = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
            .then((r) => {
                window.localStorage.setItem("token", r.data.token)
            }).catch((e) => {
                console.log(e)
            })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubimition = (event) => {
        event.preventDefault()
        postLogin()
        resetState()
    }
    return (
        <main>
            <form onSubmit={handleSubimition}>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder='Email'
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder='Password'
                    required
                />
                <button>Login</button>
            </form>
        </main>
    )
}