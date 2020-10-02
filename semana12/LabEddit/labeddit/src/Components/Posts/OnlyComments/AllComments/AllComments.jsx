import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import LoadingLoged from '../../LoadingLoged'
import { Container, Create, Div, DivDetail, DivPost, DivVotes, Main, MapPosts } from '../../styles'
import CreateComments from '../CreateComments/CreateComments.jsx'

export default function AllComments() {
    const [postDetail, setPostDetail] = React.useState([])
    const [comments, setComments] = React.useState([])

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

    const countValue = (n, id) => {
        if (n === 1) {
            commentsVote(1, id)
        }
        else if (n === -1) {
            commentsVote(-1, id)
        }
    }

    const commentsVote = (value, id) => {
        console.log(token)
        console.log(value)
        const body = {
            direction: value
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment/${id}/vote`, body, {
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r)
            getPostDetail()
        }).catch((e) => {
            console.log(e)
        })
    }

    React.useEffect(() => {
        getPostDetail()
    }, [])
    return (
        <Main>
            {comments.length > 0 ?
                (<>
                    <Container>
                        <DivDetail>
                            <b>{postDetail.username}</b>
                            <h2>{postDetail.title}</h2>
                            <p>{postDetail.text}</p>
                        </DivDetail>
                        <Create>
                            <CreateComments pathParams={pathParams.id} getPostDetail={getPostDetail} />
                        </Create>
                        <MapPosts>
                            {comments.length === 0 && <><LoadingLoged /></>}

                            {
                                comments.map((comments) => {
                                    return (
                                        <Div>
                                            {comments === 0 ? <>Sem comentários</> :
                                                <>
                                                    <DivPost>
                                                        <h4>{comments.username}</h4>
                                                        <p>{comments.text}</p>
                                                    </DivPost>
                                                    <DivVotes>
                                                        <div onClick={() => countValue(1, comments.id)}> &#x1F51D; </div>
                                                        <div>{comments.votesCount}</div>
                                                        <div onClick={() => countValue(-1, comments.id)}> &#x2B07; </div>
                                                    </DivVotes>
                                                </>}
                                        </Div>
                                    )
                                })
                            }

                        </MapPosts>
                    </Container>
                </>)
                :
                (<>Carregando ...</>)
            }
        </Main >
    )
}