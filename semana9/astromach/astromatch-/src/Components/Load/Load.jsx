import React, { useState, useEffect } from 'react'
import App from '../../App'
import styled from 'styled-components'
import load1 from './imgs/load1.gif'


const Bg = styled.div`
background-color: #fff;
width: 400px;
height: 30px;
margin: 0 auto;
border-radius: 10px;
border: 3px solid black;
`;


const Progress = styled.div`
background: linear-gradient(
    135deg, 
    #009999 25%, #008283 25%,
    #008283 50%, #009999 50%,
    #009999 75%, #008283 75%
);


/* width: 80%; */
height: 24px;
line-height: 30px;
color: #fff;
background-size: 50px 50px;
border-radius: 7px;
border: 3px solid #009999;
animation: bar-animation 3s linear infinite;

@keyframes bar-animation {
    0% {
        background-position: 0 0;
        width: 10%;
    }
    100% {
        background-position: 50px 50px;
        width: 100%;
    }
}
`;


const Div = styled.div`
height: 100vh;
background-color: orange;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img {
    width: 40vmin;
    /* border: 20px solid black; */
}
`;


export default function Load() {
    const [done, setDone] = React.useState(undefined)

    React.useEffect(() => {
        setTimeout(() => {
            setDone(true)
        }, 2000)
    })


    return (
        <div>
            {!done ? (
                <Div>
                    <img src={load1} alt="" />
                    <Bg>
                        <Progress>
                        </Progress>
                    </Bg>
                </Div>
            ) : (<App />)}
        </div>
    )
}