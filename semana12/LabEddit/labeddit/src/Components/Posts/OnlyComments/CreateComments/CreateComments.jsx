import axios from 'axios'
import React from 'react'
import useForm from '../../../../CustomHooks/Forms/useForm'
import styled from 'styled-components'

const DivForm = styled.div`
    text-align: center;   
    /* background: white; */
    width: 400px;
    margin: 10px 0;
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
        width: 400px;
        height: 30px;
        margin: 10px;
        
        :focus{
            outline: none;
        }
    }
    textarea{
        width: 300px;
        height: 50px;
        resize:none;
        margin: 20px;
        border-bottom: 2px solid blueviolet;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
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
height: 100%;

`;

export default function CreateComments(props) {
    const { form, onChange, resetState } = useForm({ text: '' })

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
        <Main>
            <DivForm>
                <form onSubmit={handleSubimition}>
                    <input
                        type="text"
                        name="text"
                        value={form.text}
                        onChange={handleInputChange}
                        placeholder="Comentário"
                        required
                    />
                    <button>Comentar</button>
                </form>
            </DivForm>
        </Main>
    )
}