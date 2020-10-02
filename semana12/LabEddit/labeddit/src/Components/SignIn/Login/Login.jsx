import axios from 'axios'
import React from 'react'
import useForm from '../../../CustomHooks/Forms/useForm'
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import LoadingSignIn from '../LoadingSignIn';

const DivForm = styled.div`
    text-align: center;   
    background: white;
    width: 250px;
    height:330px;  
    border-radius: 10px;
    h2{
        margin: 30px 0 20px ;
        justify-content: start;
    }
    span{
        display: block;
        margin: 20px;
        b{
            :hover{
                color: blueviolet;
                cursor: pointer;
            }
        }
    }
form{
    display: flex;
    align-items: center;
    flex-direction: column;
    input{
        border: none;
        border-bottom: 2px solid blueviolet;
        border-bottom-left-radius: 6px;
        background: transparent;
        padding-left: 5px;
        height: 30px;
        margin: 20px;
        
        :focus{
            outline: none;
        }
    }
        button {
        border-color: blueviolet;
        border-radius: 7px;
        padding: 5px 15px;
        background: transparent;
        text-transform: uppercase;
        :hover{
            cursor: pointer;
            font-weight: bolder;
        }
        :active{
            background: red;
            outline:transparent;
        }
    }
}
`;

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
min-height: 80vh;
/* background: red; */

`;


export default function Login() {
    const [loading, setLoading] = React.useState(false)
    const { form, onChange, resetState } = useForm({ email: '', password: '' })

    const history = useHistory()

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
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        title="Senha"
                        required
                    />
                    {/* <button> {loading ? 'Login' : <LoadingSignIn />}</button> */}
                    <button> {loading ? <LoadingSignIn /> : 'Login'}</button>
                </form>
                <span>
                    <b onClick={goToSignup}>Cadastre-se</b>
                </span>

            </DivForm>
        </Main>
    )
}