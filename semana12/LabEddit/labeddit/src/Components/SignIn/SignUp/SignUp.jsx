import axios from 'axios'
import React from 'react'
import useForm from '../../../CustomHooks/Forms/useForm'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import LoadingSignIn from '../LoadingSignIn';

const DivForm = styled.div`
    text-align: center;   
    background: white;
    width: 250px;
    height:400px;  
    border-radius: 10px;
    h2{
        margin: 30px 0 20px ;
        justify-content: start;
    }
    span{
        display: block;
        margin: 15px;
        div{
            display: inline;
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
background: red;

`;

export default function SignUp() {
    const [loading, setLoading] = React.useState(false)
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
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder='Password'
                        required
                    />
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