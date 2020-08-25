import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

export default class App extends React.Component {
  state = {
    name: "",
    email: "",
    listUser: []
  }

  listarUsers = () => {
    const body = {
      // id: this.state.id,
      name: this.state.nome
    }
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "matheus-candido-jackson"
        }
      }
    )

    request
      .then((resposta) => {
        console.log(resposta.data)
        this.setState({ listUser: resposta.data.result.list })
      })
      .catch((error) => {
        alert("lista errada")
      })
  }


  newUser = (name, email) => {
    const body = {
      name: name,
      email: email
    }

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "matheus-candido-jackson"
        }
      }
    )

    request
      .then((response) => {
        console.log(response.data)
        alert(`lalala ${this.listarUsers}`)
        this.listarUsers()
      })
      .catch((error) => {
        alert("error lul!!")
      })
  }

  componentDidMount() {
    this.listarUsers()
  }
  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })

  }

  render() {
    const addOnList = () => {
      this.newUser(this.state.name)
      this.setState({ name: "" })
      this.newUser(this.state.email)
      this.setState({ email: "" })
    }
    return (
      <div className="App">
        <h1>insira seu usuario</h1>
        <input value={this.state.name} onChange={(e) => this.onChangeName(e)} />
        <input value={this.state.email} onChange={(e) => this.onChangeEmail(e)} />
        <button onClick={addOnList}>Criar usuario</button>
        <h1>lista usuarios</h1>
        {this.state.listUser.map((item) => {
          return <p key={item.id}>{item.name}</p>
        })}
      </div>
    )
  }
}

