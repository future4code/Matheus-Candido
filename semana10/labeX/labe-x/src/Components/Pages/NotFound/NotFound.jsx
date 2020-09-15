import React from 'react'
import styled from 'styled-components'
import notFound from './img/404.gif'

const Main = styled.main`
min-height: 100vh;
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;
`;


export default function NotFound() {
    return (
        <Main>
            <h2>Page Not Found FI DA RAPARIGA!!! 404 aaaaaaaaa</h2>
            <div><img src={notFound} alt="" /></div>
            
            
        </Main>
    )
}