import React from 'react'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import styled from "styled-components";
import CreatePosts from '../CreatePosts/CreatePosts';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container, Create, Div, Main, MapPosts } from '../../styles';




export default function LoggedPosts(props) {
    // const { posts, getAllPosts } = useAxios()
    const history = useHistory()

    React.useEffect(() => {
        props.getAllPosts()
    }, [])


    const goToComments = (history, id) => {
        history.push(`/posts/comments/${id}`)
    }

    return (

        <Main>
            <Container>
                <Create>
                    <CreatePosts getAllPosts={props.getAllPosts} />
                </Create>
                <MapPosts>
                    {props.posts.length > 0 ?
                        (<>
                            {
                                props.posts.map((posts) => {
                                    return (
                                        <Div>
                                            <p>{posts.text}</p>
                                            <button onClick={() => goToComments(history, posts.id)}>Comentarios</button>
                                        </Div>
                                    )
                                })
                            }
                        </>)
                        :
                        (<>Carregando ...</>)
                    }

                </MapPosts>
            </Container>
        </Main >
    )
}