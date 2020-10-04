import React from 'react'
import styled from "styled-components";

const Path1 = styled.path`
fill: transparent;
            stroke-width: 3px;
            stroke: black;
            animation: svgPath1 10s ease-in-out forwards infinite;
            @keyframes svgPath1{
                0% {stroke-dashoffset: 1500}
                50%{fill: #45525B;}
                70% {stroke-dashoffset: 0;fill: #45525B;}
                100% {stroke-dashoffset: 0; fill: #45525B;}
            }
`;

const Path2 = styled.path`
fill: transparent;
            stroke-width: 3px;
            stroke: black;
            animation: svgPath2 10s ease-in-out forwards infinite;
            @keyframes svgPath2{
                0% {stroke-dashoffset: 1500}
                50%{fill: #F4AD56;}
                70% {stroke-dashoffset: 0;}
                100% {stroke-dashoffset: 0; fill: #F4AD56;}
            }
`;

const Path3 = styled.path`
fill: transparent;
            stroke-width: 3px;
            stroke: black;
            animation: svgPath3 10s ease-in-out forwards infinite;
            @keyframes svgPath3{
                0% {stroke-dashoffset: 1500}
                50%{fill: #A6B8C3;}
                70% {stroke-dashoffset: 0;fill: #A6B8C3;}
                100% {stroke-dashoffset: 0; fill: #A6B8C3;}
            }
`;

const Path4 = styled.path`
fill: transparent;
            stroke-width: 3px;
            stroke: black;
            animation: svgPath4 10s ease-in-out forwards infinite;
            @keyframes svgPath4{
                0% {stroke-dashoffset: 1500}
                50%{fill: #F27D1F;}
                70% {stroke-dashoffset: 0; fill:#F27D1F;}
                100% {stroke-dashoffset: 0; fill: #F27D1F;}
            }
`;

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80%;
div{
    svg{
        stroke-width: 10px;
        /* stroke: #003366; */
        stroke-dashoffset: 1500;
        stroke-dasharray: 300;
        path {
        }  
    }
}
`;


export default function () {
    return (
        <Main>
            <div>
                <svg version="1.1" x="0px" y="0px"
                    width="101.3px" height="109.4px" viewBox="0 -6 71.3 109.4" >
                    <g>
                        <Path1 fill="#45525B" d="M10.6,25.6c3.4-4.2,7.4-7.8,11.2-11.7c1.6-1.6,3.1-3.2,4.8-4.8c2.6-2.5,5.1-5.1,7.6-7.6
		c0.4-0.4,1-1.1,1.6-1.1c0.7,0,1.3,0.8,1.7,1.3c2.4,2.9,4.5,6.2,6,9.6c3.4,7.7,3.6,16.3,1.2,24.3c-0.6,2-1.4,4-2.2,6
		c-0.3,0.8-0.6,1.8-1,2.6c-0.4,0.7-1.1,1.3-1.6,1.9c-0.6,0.8-1.2,1.5-1.8,2.3c-0.5,0.6-1.4,2.1-2.3,2c-0.8-0.1-1.6-1.2-2.2-1.7
		c-0.8-0.8-1.7-1.6-2.5-2.5c-3.6-3.5-7.1-7-10.6-10.5c-1.8-1.8-3.6-3.6-5.4-5.4c-0.9-0.9-1.8-1.8-2.6-2.6
		C11.9,27.4,10.5,26.4,10.6,25.6z"/>
                        <Path2 fill="#F4AD56" d="M35.4,50.4c0.2,0,0.6-0.2,0.9-0.1c0.3,0.1,0.7,0.5,0.9,0.8c0.5,0.5,1,1,1.5,1.6c0.9,1,1.8,1.9,2.7,2.9
		c2.3,2.3,4.6,4.7,6.9,7c2.3,2.3,4.6,4.6,7,6.9c1,1,2.1,1.9,3.1,3c1,1,2,2,3.2,2.8c-7.7,8.5-19.7,12.5-31.1,11
		c-5.9-0.8-11.8-3.1-16.4-6.9c-1.1-0.9-2.1-1.9-3-2.9c-0.2-0.3-0.4-0.4-0.3-0.8c0.1-0.3,0.4-0.5,0.6-0.7c0.5-0.5,1.1-1.1,1.6-1.6
		c2.3-2.4,4.8-4.6,7.1-6.9c2.7-2.6,5.4-5.4,8-8.1c1.3-1.4,2.7-2.8,4-4.3c0.6-0.7,1.2-1.3,1.8-2C34.2,51.5,34.8,50.4,35.4,50.4z"/>
                        <Path3 fill="#A6B8C3" d="M35.1,50c0.2,0.2,0.2,0.6,0,0.8c-5.4,6.6-11.7,12.6-17.8,18.6c-1.6,1.5-3.1,3-4.7,4.5
		c-0.4,0.4-0.7,0.7-1.1,1.1c-0.1,0.1-0.4,0.4-0.5,0.5c-0.6,0.4-0.1,0.2-0.5,0.1c-0.7-0.3-1.5-1.4-2-2c-2.4-2.5-4.3-5.5-5.6-8.8
		c-3-7.2-3.6-15.8-1.7-23.4c0.9-3.6,2.4-6.9,4.4-10c1.4-2.1,3.1-4,5-5.7c0.4-0.1,0.9,0.6,1.3,1c0.8,0.8,1.6,1.6,2.3,2.3
		c3.5,3.6,7.1,7.1,10.7,10.6L35.1,50z"/>
                        <Path4 fill="#F27D1F" d="M61.4,75.3c-1.1-0.1-1.7-0.8-2.4-1.5c-0.8-0.8-1.7-1.6-2.5-2.5c-1.7-1.6-3.4-3.3-5-4.9
		C46.9,62,42.5,57.5,38.2,53c-0.2-0.2-1-1.1-1.2-1.3c-0.3-0.3-0.7-0.8-0.8-1.1c-0.1-0.4,0.6-1,0.9-1.4c0.7-0.9,1.5-1.8,2.2-2.7
		c0.3-0.4,0.7-0.8,1-1.2c0.3-0.4,0.7-1.1,1.1-1.4c0.3-0.2,0.8-0.2,1.2-0.4c0.4-0.2,0.7-0.5,1-0.8c1.5-1.6,2.9-3.1,4.5-4.6
		c3.1-3.1,6.2-6.2,9.3-9.3c1.1-1.1,2.7-3.4,4.4-2.3c1.5,1,2.7,3,3.7,4.5c4.3,6.3,6.2,13.8,5.8,21.4c-0.2,4.2-1.2,8.4-2.8,12.2
		C66.8,68.5,64.4,72.4,61.4,75.3z"/>
                    </g>
                </svg>
            </div >
        </Main >
    )
}