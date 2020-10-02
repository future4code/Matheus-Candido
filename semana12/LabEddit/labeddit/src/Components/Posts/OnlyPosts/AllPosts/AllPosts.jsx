import React from 'react'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import styled from "styled-components";
import CreatePosts from '../CreatePosts/CreatePosts';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Create, Div, DivLoading, DivPost, DivVotes, Main, MapPosts } from '../../styles';
import { useProtect } from '../../../../CustomHooks/ProtectRoute/useProtect';
import LoadingLoged from '../../LoadingLoged';




export default function AllPosts(props) {
    // const { posts, getAllPosts } = useAxios()

    const history = useHistory()

    const { token } = useAxios()
    const pathParams = useParams()

    const countValue = (n, id) => {
        if (n === 1) {
            commentsVote(id, 1)
        }
        else if (n === -1) {
            commentsVote(id, -1)
        }
    }

    const commentsVote = (value, id) => {
        console.log(token)
        console.log(value)
        const body = {
            direction: value
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body, {
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r)
        }).catch((e) => {
            console.log(e)
        })
    }

    React.useEffect(() => {
        props.getAllPosts()
    }, [])


    const goToComments = (history, id) => {
        history.push(`/posts/comments/${id}`)
    }

    useProtect()
    return (

        <Main>
            <Container>
                <Create>
                    <CreatePosts getAllPosts={props.getAllPosts} />
                </Create>
                <MapPosts>
                    {props.posts && props.posts.length > 0 ?
                        (<>
                            {
                                props.posts.map((posts) => {
                                    return (
                                        <Div>
                                            <DivPost>
                                                <h4>{posts.username}</h4>
                                                <p>{posts.text}</p>
                                                <button onClick={() => goToComments(history, posts.id)}><span>{posts.commentsCount}</span> Comentarios</button>
                                            </DivPost>

                                            <DivVotes>
                                                <div onClick={() => countValue(1, posts.id)}> &#x1F51D; </div>
                                                <div>{posts.votesCount}</div>
                                                <div onClick={() => countValue(-1, posts.id)}> &#x2B07; </div>
                                            </DivVotes>
                                        </Div>
                                    )
                                })
                            }
                        </>)
                        :
                        (<DivLoading><LoadingLoged /></DivLoading>)
                    }

                </MapPosts>
            </Container>
        </Main >
    )
}