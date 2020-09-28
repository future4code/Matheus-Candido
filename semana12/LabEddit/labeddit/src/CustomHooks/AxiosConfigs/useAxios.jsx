import axios from 'axios'

export const useAxios = () => {
    const [posts, setPosts] = React.useState([])

    const getAllPosts = () => {
        axios.get('')
            .then((r) => {
                console.log(r.data)
                setPosts(r.data)
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

    return { getAllPosts, posts, postNewPost }
}
