import React from 'react'
import Header from '../../Assets/Header/Header'
import styled from "styled-components";

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
        </Main>
    )
}