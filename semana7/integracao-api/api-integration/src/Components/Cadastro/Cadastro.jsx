import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'

const Del = styled.b`
font-size: 20px;
color: red;
cursor: pointer;
`

export default class Cadastro extends React.Component {
    state = {
        name: "",
        email: ""
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
                console.log(resposta.data)
                this.setState({ listUser: resposta.data })
                
            })
            .catch((error) => {
                alert("lista errada")
            })


    }

    newUser = (nome, email) => {
        const body = {
            name: nome,
            email: email
        }

        const request = axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, body,
            {
                headers: {
                    Authorization: "matheus-candido-jackson"
                }
            }
        )
        console.log(request)
        request
            .then((resposta) => {
                console.log(`alalala ${resposta}`)

                this.listarUsers()
                alert(`lalala${resposta.config.data.name}`)
                this.setState({nome:""})
            })
            .catch((error) => {
                console.log(error)
                alert("error lul!!")
            })
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })

    }

    render() {
        const addOnList = () => {
            this.newUser(this.state.name, this.state.email)
            this.setState({
                name: "",
                email: ""
            })

        }
        return (
            <div className="App" >
                <header>
                    <button onClick={this.props.funcaoCadastro}>Ir para Users</button>
                </header>
                <h1>insira seu usuario</h1>
                <input value={this.name} onChange={(e) => this.onChangeName(e)} />
                <input value={this.email} onChange={(e) => this.onChangeEmail(e)} />
                <button onClick={addOnList}>Criar usuario</button>

            </div>
        )
    }
}

