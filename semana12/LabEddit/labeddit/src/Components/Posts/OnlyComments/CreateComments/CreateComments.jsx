import axios from 'axios'
import React from 'react'
import useForm from '../../../../CustomHooks/Forms/useForm'

export default function CreateComments(props) {
    const { form, onChange, resetState } = useForm({ text: ''})

    const commentNewComment = () => {
        const body = {
            text: form.text,
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.pathParams}/comment`, body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((r) => {
                console.log(r)
                props.getPostDetail()
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
        commentNewComment()
        resetState()
    }
    return (
        <div>
            <form onSubmit={handleSubimition}>
                <input type="text" name="text" value={form.text} onChange={handleInputChange} />
                <button>Criar</button>
            </form>
        </div>
    )
}