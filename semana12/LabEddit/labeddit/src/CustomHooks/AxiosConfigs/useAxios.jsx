import React from 'react'
import axios from 'axios'

export const useAxios = () => {
    const [posts, setPosts] = React.useState([])

    const token = localStorage.getItem("token")

    const getAllPosts = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {
            headers: {
                Authorization: token
            }
        })
            .then((r) => {
                console.log(r.data.posts)
                setPosts(r.data.posts)
            }).catch((e) => {
                console.log(e.data)
                alert('Erro ao carregar as informações, por favor recarregue a página.')
            })
    }
    return { getAllPosts, posts, token }
}
