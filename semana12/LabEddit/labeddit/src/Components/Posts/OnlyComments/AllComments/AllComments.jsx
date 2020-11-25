import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import LoadingLoged from '../../LoadingLoged'
import { Container, Div, DivDetail, DivPost, DivVotes, Main, MapPosts } from '../../styles'
import CreateComments from '../CreateComments/CreateComments.jsx'
import up from '../../Imgs/up.png'
import down from '../../Imgs/down.png'

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

            <Container>
                <Div>
                    <DivDetail>
                        <b>{postDetail.username}</b>
                        <h5>{typeof postDetail.title === 'string' && postDetail.title}</h5>
                        <p>{postDetail.text}</p>
                    </DivDetail>
                </Div>
                <div>
                    <CreateComments pathParams={pathParams.id} getPostDetail={getPostDetail} />
                </div>
                {comments.length > 0 ?
                    (<>
                        <MapPosts>
                            {comments.map((comments) => {
                                return (
                                    <Div key={comments.id}>
                                        {comments === 0 ? <>Sem comentários</> :
                                            <>
                                                <DivPost>
                                                    <h4>{comments.username}</h4>
                                                    <p>{comments.text}</p>
                                                </DivPost>
                                                <DivVotes>
                                                    <img src={up} alt="" onClick={() => countValue(1, comments.id)} />
                                                    <div>{comments.votesCount}</div>
                                                    <img src={down} alt="" onClick={() => countValue(-1, comments.id)} />
                                                </DivVotes>
                                            </>}
                                    </Div>
                                )
                            })}
                        </MapPosts>
                    </>)
                    :
                    (<div><LoadingLoged /></div>)
                }
            </Container>

        </Main >
    )
}