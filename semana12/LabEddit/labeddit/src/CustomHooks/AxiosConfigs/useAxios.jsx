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
            })
    }

    const postNewPost = () => {
        const body = {
            name: '',
            text: '',
        }
        axios.post('', body)
            .then((r) => {
                console.log(r)
            }).catch((e) => {
                console.log(e)
            })
    }

    // React.useEffect(() => {
    //     getAllPosts()
    // })
    return { getAllPosts, posts, postNewPost }
}
