import axios from 'axios'
import React from 'react'
import useForm from '../../../CustomHooks/Forms/useForm'

export default function SignUp() {
    const { form, onChange, resetState } = useForm({ email: '', password: '', username: '' })

    const postLogin = () => {
        const body = {
            email: form.email,
            password: form.password,
            username: form.username
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
            .then((r) => {
                console.log(r)
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
                <input
                    type="username"
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    placeholder='User Name'
                    required
                />
                <button>Sign Up</button>
            </form>
        </main>
    )
}