import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'
import bgi from '../img/bg.jpg'
import Button from '@material-ui/core/Button'

const UserC = styled.b`
cursor: crosshair;
`

const UListas = styled.li`
font-size: 20px;
list-style: upper-roman;
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
        id: "",
    }




    listarUsers = () => {
        const request = axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
            {
                headers: {
                    Authorization: "matheus-candido-jackson"
                }
            }
        )

        request
            .then((resposta) => {
                this.setState({ listUser: resposta.data })
                this.listarUsers()
            })
            .catch((error) => {
                alert("lista errada")
            })
    }

    deleteUser = (id) => {
        const request = axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "matheus-candido-jackson"
                }
            }
        )
        request
            .then((resposta) => {
                alert(`Deleted user`)
            })
            .catch((error) => {
                alert(error)
            })
    }

    componentDidMount() {
        this.listarUsers()
    }

    render() {
        return (
            <Principal className="App" >
                <header>
                    <Button onClick={this.props.funcaoCadastro} variant="contained" color="secondary">Sing Up page &gt;</Button>
                </header>
                <h1>Users:</h1>
                {this.state.listUser.map((item) => {
                    return (
                        <UListas key={item.id}>{""}<UserC onClick={this.props.funcaoUser}>{item.name}</UserC> {""}<Del onClick={() => (window.confirm('ok?')) ? this.deleteUser(item.id) : null}>X</Del></UListas>
                    )
                })}
            </Principal>
        )
    }
}

