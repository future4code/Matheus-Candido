import styled from 'styled-components'

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
background: whitesmoke;
div{
    svg{
        stroke-width: 10px;
        stroke-dashoffset: 1500;
        stroke-dasharray: 300;
        path {
        }  
    }
}
`;

export const Path1 = styled.path`
    fill: transparent;
        stroke-width: 3px;
        stroke: black;
        animation: svgPath1 10s ease-in-out forwards infinite;
        @keyframes svgPath1{
            0% {stroke-dashoffset: 1500}
            20%{fill: #45525B;}
            70% {stroke-dashoffset: 0;fill: #45525B;}
            100% {stroke-dashoffset: 0; fill: #45525B;}
        }
`;

export const Path2 = styled.path`
    fill: transparent;
        stroke-width: 3px;
        stroke: black;
        animation: svgPath2 10s ease-in-out forwards infinite;
        @keyframes svgPath2{
            0% {stroke-dashoffset: 1500}
            20%{fill: #F4AD56;}
            70% {stroke-dashoffset: 0;}
            100% {stroke-dashoffset: 0; fill: #F4AD56;}
        }
`;

export const Path3 = styled.path`
    fill: transparent;
        stroke-width: 3px;
        stroke: black;
        animation: svgPath3 10s ease-in-out forwards infinite;
        @keyframes svgPath3{
            0% {stroke-dashoffset: 1500}
            20%{fill: #A6B8C3;}
            70% {stroke-dashoffset: 0;fill: #A6B8C3;}
            100% {stroke-dashoffset: 0; fill: #A6B8C3;}
        }
`;

export const Path4 = styled.path`
    fill: transparent;
        stroke-width: 3px;
        stroke: black;
        animation: svgPath4 10s ease-in-out forwards infinite;
        @keyframes svgPath4{
            0% {stroke-dashoffset: 1500}
            20%{fill: #F27D1F;}
            70% {stroke-dashoffset: 0; fill:#F27D1F;}
            100% {stroke-dashoffset: 0; fill: #F27D1F;}
        }
`;

export const PathTitle = styled.div`
height: 1%;
    svg{
        display: flex;
        align-content: center;
        height: 100px;
        width: 100%;
        path{
            fill: transparent;
            stroke-width: 3px;
            stroke: black;
            animation: svgPathTitle 10s ease-in-out forwards infinite;
            @keyframes svgPathTitle{
                0% {stroke-dashoffset: 1500}
                20%{fill: #F27D1F;}
                70% {stroke-dashoffset: 0; fill:#F27D1F;}
                100% {stroke-dashoffset: 0; fill: #F27D1F;}
            }
        }
    }
`