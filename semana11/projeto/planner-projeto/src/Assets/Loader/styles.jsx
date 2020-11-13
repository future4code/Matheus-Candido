import styled from 'styled-components'

export const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Animation = styled.div`
    svg{
        stroke-width: 2px;
        stroke: #003366;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        width: 30vmin;
        path {
            fill: transparent;
            stroke-width: 5;
            stroke: black;
            animation: svgAnimation 3s ease-in-out infinite;
            @keyframes svgAnimation{
                0% {stroke-dashoffset: 1000;}
                70% {stroke-dashoffset: 0;}
                100% {stroke-dashoffset: 0; fill: rgba(89, 70, 102, 1);}
            }
        }
    }
`;