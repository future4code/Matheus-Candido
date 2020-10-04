import React from 'react'
import styled from "styled-components";

const Circle = styled.div`
padding: 0;
margin: 0;
    border: 3px solid black;
    border-radius: 50%;
    border-top: 3px solid rgb(246,175,86);
    width: 9px;
    height: 9px;
    margin: 0px 13px;
    animation: spin 2s linear infinite;
    @keyframes spin{
        0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }
`;


export default function LoadingSignIn() {
    return (
            <Circle></Circle>          
    )
}