import React from 'react'
import { useAxios } from '../../../../CustomHooks/AxiosConfigs/useAxios'
import CreatePosts from '../CreatePosts/CreatePosts';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container, Div, DivPost, DivVotes, Main, MapPosts } from '../../styles';
import { useProtect } from '../../../../CustomHooks/ProtectRoute/useProtect';
import LoadingLoged from '../../LoadingLoged';
import up from '../../Imgs/up.png'
import down from '../../Imgs/down.png'

export default function AllPosts(props) {
    const history = useHistory()
    const { token } = useAxios()

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
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body, {
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r)
            props.getAllPosts()
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

                <div>
                    <CreatePosts getAllPosts={props.getAllPosts} />
                </div>
                {props.posts && props.posts.length > 0 ?
                    (<>
                        <MapPosts>
                            {props.posts.map((posts) => {
                                return (
                                    <Div key={posts.id}>
                                        <DivPost>
                                            <h3>{posts.username}</h3>
                                            <h5>{typeof posts.title === 'string' && posts.title}</h5>
                                            <p>{posts.text}</p>
                                            <button onClick={() => goToComments(history, posts.id)}>
                                                <span>{posts.commentsCount}</span> Comentarios</button>
                                        </DivPost>

                                        <DivVotes>
                                            <img src={up} alt="" onClick={() => countValue(1, posts.id)} />
                                            <div>{posts.votesCount}</div>
                                            <img src={down} alt="" onClick={() => countValue(-1, posts.id)} />
                                        </DivVotes>
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