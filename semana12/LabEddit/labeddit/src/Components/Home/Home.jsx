import React from 'react'
import Header from '../../Assets/Header/Header'
import styled from "styled-components";
import AllPosts from '../Posts/OnlyPosts/AllPosts/AllPosts';

const Main = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;


export default function Home() {
    return (
        <Main>
            <h2>Home</h2>
            
            {/* {<AllPosts /> !== undefined ? <AllPosts /> : <>Carregando....</>} */}

        </Main>
    )
}