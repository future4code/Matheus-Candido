import React from 'react'
import styled from "styled-components";

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
div{
    /* border: 16px solid black;
    border-radius: 50%;
    border-top: 16px solid blueviolet;
    width: 109px;
    height: 109px;
    /* margin: 0px 13px; */
    /* animation: spin 2s linear infinite;
    @keyframes spin{
        0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    } */
    svg{
        stroke-width: 2px;
        stroke: #003366;
        stroke-dashoffset: 1000;
        stroke-dasharray: 1000;
        path {
            fill: transparent;
            stroke-width: 10;
            stroke: black;
            animation: svgAnimationLogo 3s ease-in-out forwards infinite;
            @keyframes svgAnimationLogo{
                0% {stroke-dashoffset: 1000}
                70% {stroke-dashoffset: 0;}
                100% {stroke-dashoffset: 0; fill: orangered;}
            }
        }  
    }
}
`;


export default function () {
    return (
        <Main>
            <div>
                <svg

                    width="3.387cm" height="4.057cm">
                    <image x="0px" y="0px" width="96px" height="115px" href="data:img/png;base64,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" />
                </svg>
                {/* <svg width="108" height="123" viewBox="0 0 108 123">
                    <image id="Camada_0" data-name="Camada 0" x="7" y="1" width="96" height="115" />
                </svg > */}
            </div >
        </Main >
    )
}