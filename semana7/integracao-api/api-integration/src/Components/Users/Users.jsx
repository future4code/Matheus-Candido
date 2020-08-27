import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'
import bgi from '../img/bg.jpg'
import Button from '@material-ui/core/Button'
import { Url, Config } from '../../Constants/axiosconstants'

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

    componentDidMount() {
        const lalala = async () => {
            try {
                const request = await axios.get(`${Url}/${this.state.id}`, { Config })
                console.log(request.data)
            }
            catch (error) {
                console.log(error)
            }
        }
    }


    render() {
        return (
            <Principal className="App" >
                <Button onClick={this.props.funcaoUserList} variant="contained" color="Link">Voltar</Button>
                <h2> Sem user ;-;</h2>
                <h2>Cod error: Fail :(</h2>
                {this.state.listUser.map((item) => {
                    return (
                        <b>{item.id}</b>
                    )
                })}
            </Principal>
        )
    }
}

