import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Choose_Person, Profile_To_Choose, Clear } from '../../Axios/Axios'
import styled from "styled-components";
import NavBar from '../NavBar/NavBar';
import ProfilesP from '../ProfilesP/ProfilesP'
import Matches from '../Matchs/Matches';
// import NavButtom from '../ProfilesP/NavButtom/NavButtom';

const Icon = styled.div`
display: flex;
justify-items: ${props => !props.currentPage ? 'left' : 'right'};
align-content: ${props => !props.currentPage ? 'left' : 'right'};
`;


// const Bottom = styled.div`
// height: 10%;

// `;

const ImgIcon = styled.img`

`

const Center = styled.div`
padding: 20px 20px 0px;
display: flex;
flex-direction: column;
flex: 1 1 0%;
justify-content: flex-end;

`;


const Nav = styled.div`
display: flex;
background-color: red;
height: 15%;
border-bottom: 1px solid black;
border-radius: 8px 8px 0 0;

`;


const Main = styled.main`
/* display: flex;
justify-content: center;
align-items: center; */
height: 100vh;
background-color: rgba(255, 0, 0, 0.5);
`;


const Card = styled.div`
width: 350px;
height: 500px;
border: 3px solid black;
border-radius: 10px;
box-shadow: 15px 15px 20px 1px black;
font-size: 15px;
background-color: rgba(255, 0, 0, 0.1);
/* justify-content: ${props => props.inputColor || "palevioletred"}; */
position: fixed;
top: 0%;
left: 50%;
transform: translate(-50%, 50%);
`;

export default function TheCard(props) {
    // const [profiles, setProfiles] = useState([])
    const [currentPage, setCurrentPage] = useState(true)
    const [profiles, setProfiles] = useState([])


    // const getProfile = () => {
    //     axios.get(Profile_To_Choose)
    //         .then(r => {
    //             setProfiles(r.data.profile)
    //             console.log(r.data.profile)
    //         }).catch(e => {
    //             console.log(e)
    //         })
    // }

    // const postProfile = (id, choice) => {
    //     const body = {
    //         id: profiles.id,
    //         choice: true
    //     }
    //     axios.post(Choose_Person, body)
    //         .then(r => {

    //             console.log(r)
    //         }).catch(e => {
    //             console.log(e)
    //         })
    // }

    // const Choose = (option) => {
    //     if (option === 'dislike') {
    //         getProfile()
    //     }
    //     if (option === 'like') {
    //         postProfile()
    //         getProfile()
    //     }
    // }

    // useEffect(() => {
    //     getProfile()
    // }, [])
    const onClick = () => {
        setCurrentPage(!currentPage)
    }



    
    const clean = () => {
        const body = {
            id: profiles.id
        }
        axios.put(Clear, body)
            .then(r => {
                console.log(r)
            }).catch(e => {
                console.log(e)
            })
    }
    return (
        <Main>
            <Card>
                <Nav>
                    <Icon >

                        <ImgIcon src={currentPage ? 'URL' : 'url'} currentPage={currentPage} onClick={() => onClick()} />

                    </Icon>

                    <NavBar />
                </Nav>
                <Center>
                    {currentPage ? <ProfilesP /> : <Matches />}
                </Center>
                {/* <Bottom>
                    <NavButtom />
                </Bottom> */}
            </Card>
            <button onClick={clean}>Clean</button>
        </Main>
    )
}