import axios from 'axios'
import React from 'react'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import useForm from '../../../../CustomHooks/Forms/useForm'

export default function CreatePosts(props) {
    const { form, onChange, resetState } = useForm({ text: '', title: '' })

    const postNewPost = () => {
        const body = {
            text: form.text,
            title: form.title
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
        <div>
            <form onSubmit={handleSubimition}>
                <input type="text" name="text" value={form.text} onChange={handleInputChange} />
                <input type="text" name="title" value={form.title} onChange={handleInputChange} />
                <button>Criar</button>
            </form>
        </div>
    )
}