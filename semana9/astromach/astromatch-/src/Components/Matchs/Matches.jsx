import React, { useState, useEffect } from 'react'
import { Matchs } from '../../Axios/Axios'
import axios from 'axios'
import styled from "styled-components";

const Div = styled.div`
display: flex;
align-items: center;
padding: 10px 13px;
`;

const Img = styled.img`
border-radius: 50px;
width: 5vmin;
`;


export default function Matches() {
    const [matchs, setMatches] = useState([])

    const match = () => {
        axios.get(Matchs)
            .then(r => {
                setMatches(r.data.matches)
                console.log(r)
            }).catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        match()
    }, [])

    return (
        <div>
            {matchs.map((M) => {
                return (
                    <Div key={M.id}> <Img src={M.photo} alt="" /> <b>{M.name}</b></Div>
                )
            })}
        </div>
    )
}