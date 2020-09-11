import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Choose_Person, Profile_To_Choose } from '../../../Axios/Axios'
import styled from "styled-components";
// import NavBar from '../NavBar/NavBar';


const NavBottom = styled.div`
height: 10%;
display: flex;
justify-content:space-around;
align-items: center;
padding: 0 60px;
`;




export default function NavButtom() {
    const [profiles, setProfiles] = useState([])
    

    const getProfile = () => {
        axios.get(Profile_To_Choose)
            .then(r => {
                setProfiles(r.data.profile)
                console.log(r.data.profile)
            }).catch(e => {
                console.log(e)
            })
    }

    const postProfile = (id, choice) => {
        const body = {
            id: profiles.id,
            choice: true
        }
        axios.post(Choose_Person, body)
            .then(r => {

                console.log(r)
            }).catch(e => {
                console.log(e)
            })
    }

    const Choose = (option) => {
        if (option === 'dislike') {
            getProfile()
        }
        if (option === 'like') {
            postProfile()
            getProfile()
        }
    }

    useEffect(() => {
        getProfile()
    }, [])
    return (
        <div>
            <NavBottom>
                <button onClick={() => Choose('dislike')} option='dislike'>X</button>
                <button onClick={() => Choose('like')} option='like'>&#x1F498;</button>
            </NavBottom>
        </div>
    )
}