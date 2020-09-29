import React from 'react'
import { useAxios } from '../../../CustomHooks/AxiosConfigs/useAxios'
import styled from "styled-components";
import CreatePosts from '../CreatePosts/CreatePosts';

const Container = styled.div`
width: 600px;
`;


const Create = styled.div`
flex-grow: 1;
`;


const Div = styled.div`
border: 1px black solid;
width: 600px;
`;


const MapPosts = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;


const Main = styled.div`
width: 100%;
height:100%;
display: flex;
justify-content: center;

`;


export default function LoggedPosts() {
    const { posts, getAllPosts, postNewPost } = useAxios()

    React.useEffect(() => {
        getAllPosts()
    }, [])

    console.log(posts)
    return (

        <Main>
            <Container>
                <Create>
                    <CreatePosts />
                </Create>
                <MapPosts>
                    {posts.map((p) => {
                        return (
                            <Div>
                                <p>{p.text}</p>
                            </Div>
                        )
                    })}
                </MapPosts>
            </Container>
        </Main>
    )
}