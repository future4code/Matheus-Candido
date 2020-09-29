import React from 'react'
import styled from "styled-components";

const Buttons = styled.div`
width: 30%;
`;


const LogoTitle = styled.div`
width: 70%;
`;

const Nav = styled.header`
height: 100%;
`;


export default function Header() {
    return (
        <Nav>
            <LogoTitle>
                <img src="" alt="" />
                <b>Header</b>
            </LogoTitle>
            <Buttons>
                {/* Lógica do botão de login */}
            </Buttons>
        </Nav>
    )
}