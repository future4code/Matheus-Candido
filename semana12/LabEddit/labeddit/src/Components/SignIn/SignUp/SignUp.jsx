import axios from 'axios'
import React from 'react'
import useForm from '../../../CustomHooks/Forms/useForm'
import { useHistory } from 'react-router-dom';
import LoadingSignIn from '../LoadingSignIn';
import show from '../Imgs/show.png'
import hide from '../Imgs/hide.png'
import { DivForm, Main, ShowPass } from './style';

export default function SignUp() {
    const [loading, setLoading] = React.useState(false)
    const [type, setType] = React.useState('password')

    const { form, onChange, resetState } = useForm({ email: '', password: '', username: '' })

    const history = useHistory()

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

    const goToLogin = () => {
        history.push('/login')
    }

    const showHide = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setType(type === 'input' ? 'password' : 'input')
    }

    return (
        <Main>
            <DivForm>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubimition}>
                    <input
                        type="username"
                        name="username"
                        value={form.username}
                        onChange={handleInputChange}
                        placeholder='User Name'
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder='Email'
                        required
                    />
                    <input
                        type={type}
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        required
                    />
                    <ShowPass onClick={showHide}>{type === 'input' ? <img src={hide} alt="" /> : <img src={show} alt="" />}</ShowPass>
                    {/* <button> {loading ? 'Login' : <LoadingSignIn />}</button> */}
                    <button>{loading ? <LoadingSignIn /> : 'Sign Up'}</button>
                </form>
                <span>
                    <b>Já é cadastrado? <div onClick={goToLogin}>Login</div></b>
                </span>
            </DivForm>
        </Main>
    )
}