import axios from 'axios'
import React from 'react'
import useForm from '../../../CustomHooks/Forms/useForm'
import { useHistory } from 'react-router-dom';
import LoadingSignIn from '../LoadingSignIn';
import show from '../Imgs/show.png'
import hide from '../Imgs/hide.png'
import { DivForm, Main, ShowPass } from './style';

export default function Login() {
    const [loading, setLoading] = React.useState(false)
    const [type, setType] = React.useState('password')
    const { form, onChange, resetState } = useForm({ email: '', password: '' })

    const history = useHistory()

    const token = window.localStorage.getItem("token")

    const postLogin = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
            .then((r) => {
                window.localStorage.setItem("token", r.data.token)
                history.push('/')
            }).catch((e) => {
                console.log(e)
            })
        setLoading(true)
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

    const goToSignup = () => {
        history.push('/signup')
    }

    const goToPost = () => {
        if (token) {
            history.push('/')
        }
    }

    const showHide = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setType(type === 'input' ? 'password' : 'input')
    }

    React.useEffect(() => {
        goToPost()
    })

    return (
        <Main>
            <DivForm>
                <h2>Login</h2>
                <form onSubmit={handleSubimition}>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder='Email'
                        title="Email"
                        required
                    />
                    <input
                        type={type}
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        title="Senha"
                        required
                    />
                    <ShowPass onClick={showHide}>{type === 'input' ? <img src={hide} alt="" /> : <img src={show} alt="" />}</ShowPass>
                    <button> {loading ? <LoadingSignIn /> : 'Login'}</button>
                </form>
                <span>
                    <b onClick={goToSignup}>Cadastre-se</b>
                </span>

            </DivForm>
        </Main>
    )
}