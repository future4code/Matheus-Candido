import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Choose_Person, Profile_To_Choose } from '../../Axios/Axios'
import styled from "styled-components";
import logo2 from '../Load/imgs/load1.gif'

const ImgLoad = styled.div`
-webkit-animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3 both;
	        animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3 both;
            background: transparent;
`;


const DivBg = styled.div`
width: 100%;
height: 37vh;
display: block;
z-index: 0;
border-radius: 10px;
background-image: url(${props => props.img});
filter: blur(10px);
`;

// import NavButtom from './NavButtom/NavButtom'

const ImgProfile = styled.img`
width: 100%;
height: 37vh;
display: block;
z-index: 1;
border-radius: 10px;

`;




const Profile = styled.div`

`;

const Img = styled.div`
 /* display: flex;
    justify-items: center;
    align-self: center; */
    /* height: 30vh;
    width: 80%; */
 position: relative;
 height: 100%;
 width: 100%;

`;

const Description = styled.div`
/* height: 30%; */
position: absolute;
bottom: 40px;
width: 80%;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
padding: 15px;
z-index: 2;

`;

const NavBottom = styled.div`


display: flex;
justify-content:space-evenly;
align-items: center;
padding: 10px 0px;
`;



export default function ProfilesP() {
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

    if (profiles === null) {
        return <ImgLoad><img src={logo2}/></ImgLoad>

    }

    return (
        <div>
            <Profile img={profiles.photo}>
                <DivBg img={profiles.photo}>
                    <Img img={profiles.photo}>
                        <ImgProfile src={profiles.photo} alt="" />
                    </Img>
                </DivBg>

                <Description>
                    <div><b>{profiles.name}</b>, {profiles.age}</div>
                    <p>{profiles.bio}</p>
                </Description>
                <NavBottom>
                    <button onClick={() => Choose('dislike')} option='dislike'>X</button>
                    <button onClick={() => Choose('like')} option='like'>&#x1F498;</button>
                </NavBottom>
            </Profile>
        </div>
    )
}