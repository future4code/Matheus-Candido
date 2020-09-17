import styled from "styled-components";

// Div que engloba o componente Load.
export const Main = styled.main`
    min-height: 100vh;
    background-color: #4158D0;
    background-image: linear-gradient(190deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 40vmin;
    }
    @media screen and (max-width: 400px){
        width: 100%;
        height: 100%;
    }
`;

// Div que contem a animação da logo do 'Tinder' em svg.
export const AnimateSvgLogo = styled.div`
    width: 200px;
    svg {
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
    @media screen and (max-width: 400px){
        width: 15%;
    }
`;

// Div que contem animação do titulo do 'Astromatch' em svg.
export const AnimateSvgTitle = styled.div`
    width: 800px;
    svg {
        stroke-width: 10px;
        stroke: black;
        stroke-dashoffset: 1000;
        stroke-dasharray: 1300;
        path {
            fill: transparent;
            stroke-width: 10;
            stroke: black;
            animation: svgAnimationTitle 3s ease-in-out forwards infinite;
            @keyframes svgAnimationTitle{
                0% {stroke-dashoffset: 1300;}
                70% {stroke-dashoffset: 0;}
                100% {stroke-dashoffset: 0; fill: orangered;}
            }
        }
    }
    @media screen and (max-width: 400px){
        width: 70%;
        ;
        
    }
`;