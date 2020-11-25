import axios from 'axios'
import React from 'react'
import useForm from '../../../../CustomHooks/Forms/useForm'
import { DivForm, Main } from '../../stylesCreate'
import '../../../../App.css';

export default function CreatePosts(props) {
    const { form, onChange, resetState } = useForm({ text: '', title: '' })

    const postNewPost = () => {
        const body = {
            title: form.title,
            text: form.text
            
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((r) => {
                console.log(r)
                props.getAllPosts()
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
        postNewPost()
        resetState()
    }

    return (
        <Main>
            <DivForm className="App">
                <form onSubmit={handleSubimition}>
                    <input
                        type="text"
                        name="title" 
                        value={form.title}
                        onChange={handleInputChange}
                        placeholder="Tilte"
                        required
                    />
                    <textarea
                        type="text"
                        name="text" 
                        value={form.text}
                        onChange={handleInputChange}
                        placeholder="Text"
                        required
                    />
                    <button>Criar Post</button>
                </form>
            </DivForm>
        </Main>
    )
}