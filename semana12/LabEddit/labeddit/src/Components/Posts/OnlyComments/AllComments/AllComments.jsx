import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import { Container, Create, Div, Main, MapPosts } from '../../styles'
import CreateComments from '../CreateComments/CreateComments.jsx'

export default function AllComments() {
    const [postDetail, setPostDetail] = React.useState([])
    const [comments, setComments] = React.useState([])
    const [count, setCount] = React.useState()

    const { token } = useAxios()
    const pathParams = useParams()

    const getPostDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}`, {
            headers: {
                Authorization: token
            }
        })
            .then((r) => {
                console.log(r.data)
                setPostDetail(r.data.post)
                setComments(r.data.post.comments)
            }).catch((e) => {
                console.log(e)
            })
    }

    const countValue = (n) => {
        if (n === 1) {
            setCount(1)
        }
        else if (n === -1) {
            setCount(-1)
        }
        console.log(count)
    }

    const commentsVote = (id) => {
        console.log(token)
        const body = {
            direction: count
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment/${id}/vote`, body, {
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r)
        }).catch((e) => {
            console.log(e)
        })
    }

    const vote = (n, id) => {
        countValue(n)
        commentsVote(id)

    }

    React.useEffect(() => {
        getPostDetail()
    }, [])
    return (
        <Main>
            <Container>
                <Create>
                    <CreateComments pathParams={pathParams.id} getPostDetail={getPostDetail} />
                </Create>
                <MapPosts>
                    {comments.length === 0 && <>Sem comentários</>}
                    {/* {comments.length > 0 ?
                        (<> */}
                    {
                        comments.map((comments) => {
                            return (
                                <Div>
                                    {comments === 0 ? <>Sem comentários</> :
                                        <>
                                            <p>{comments.username}</p>
                                            <p>{comments.text}</p>
                                            <div onClick={() => vote(1, comments.id)}> &#x1F51D; </div>
                                            <div onClick={() => vote(-1, comments.id)}> &#x2B07; </div>
                                        </>}
                                </Div>
                            )
                        })
                    }
                    {/* </>)
                        :
                        (<>Carregando ...</>)
                    } */}
                </MapPosts>
            </Container>
        </Main >
    )
}