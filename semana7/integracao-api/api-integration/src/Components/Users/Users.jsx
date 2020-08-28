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

const Texto = styled.b`
font-size: 30px;
  background: linear-gradient(90deg, rgba(245,13,87,0.9) 100%, rgba(255,205,212,0.9) 0%, rgba(9,9,121,0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 10px 10px;
list-style-type: none;
`;

const Titulo = styled.b`
font-size: 30px;
color: white;
`;

export default class Users extends React.Component {
    state = {
        user: "",
    }

    componentDidMount() {
        const request = axios.get(`${Url}/${this.props.idUser}`, Config)
        request
            .then((response) => {
                console.log("lalalalalla")
                this.setState({
                    user: response.data,
                })
                console.log(this.state.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Principal className="App" >
                <Button onClick={this.props.funcaoUserList} variant="contained" color="Link">Voltar</Button>
                <div>
                    <p>
                        <Titulo>Nome: </Titulo><Texto>{this.state.user.name}</Texto>
                    </p>
                    <p><Titulo>Email: </Titulo> <Texto>{this.state.user.email} </Texto></p>
                </div>
            </Principal>
        )
    }
}

