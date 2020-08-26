import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'
import bgi from '../img/bg.jpg'
import Button from '@material-ui/core/Button'

const Listas = styled.ol`

`

const UListas = styled.li`
font-size: 20px;
list-style: upper-roman;

li.numbered {
    counter-increment: num;
}
`;



const Principal = styled.div`
background-image: ${bgi};
height: 100vh;
font-family: 'Roboto', sans-serif;
`;


const SingUpPage = styled.button`
margin-top: 10px;
width: 7%;
height: 25px;
font-size: 15px;
border: 2px solid black;
font-family: 'Roboto', sans-serif;
font-weight: bold;
`;


const Del = styled.b`
font-size: 20px;
color: red;
cursor: pointer;
font-family: 'Roboto', sans-serif;

`

export default class Users extends React.Component {
    state = {
        name: "",
        listUser: [],
        id: ""
    }


    render() {
        return (
            <Principal className="App" >

            </Principal>
        )
    }
}

