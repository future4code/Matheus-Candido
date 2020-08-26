import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'

const Del = styled.b`
font-size: 20px;
color: red;
cursor: pointer;
`

export default class Usuario extends React.Component {
    state = {
        name: "",
        listUser: []
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
                console.log(resposta.data)
            })
            .catch((error) => {
                alert("lista errada")
            })

            
    }
    

    DeleteUser = (id) => {
        const request = axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "matheus-candido-jackson"
                }
            }
        )
        console.log(request)
        request
            .then((resposta) => {
                console.log(`lalalalalala ${resposta}`)
                // alert(`lalala ${resposta}`)
            })
            .catch((error) => {
                console.log(error)
                // alert(`error lul!! ${error}`)
            })
    }

    componentDidMount() {
        this.listarUsers()
    }

    render() {
        return (
            <div className="App" >
                <header>
                    <button onClick={this.props.funcaoUsuario}>Ir para Cadastro</button>
                </header>
                <h2>Users</h2>
                {this.state.listUser.map((item) => {
                    return (
                        <div>
                            <p key={item.id}>{item.name} <Del onClick={() => this.DeleteUser(item.id)}>X</Del></p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

