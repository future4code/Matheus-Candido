import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import styled from 'styled-components'
import SingUp from './Components/SingUp/SingUp';
import UsersList from './Components/Users/UsersList';
import Users from './Components/Users/Users'

const Del = styled.b`
font-size: 20px;
color: red;
cursor: pointer;
`

export default class App extends React.Component {
  state = {
    click: "cadastro",
    id: ""
  };

  onClickUsersList = () => {
    this.setState({
      click: "lista",
    });
  };

  onClickCadastrar = () => {
    this.setState({
      click: "cadastro"
    });
  };
  onClickUsers = () => {
    this.setState({
      click: "users"
    });

  };
  render() {
    console.log(this.state.click)
    const pagina = () => {
      switch (this.state.click) {
        case "cadastro":
          return <SingUp  funcaoUserList={this.onClickUsersList}/>

        case "lista":
          return <UsersList funcaoCadastro={this.onClickCadastrar} funcaoUser={this.onClickUsers} />

        case "users":
          return <Users funcaoUserList={this.onClickUsersList} id={this.state.id}/>

        default:
          break;
      }
    }
    return (
      <div>
        {pagina()}
        {/* 
        {this.state.click ? <UsersList funcaoUserList={this.onClickUsersList} funcaoUser={this.onClickUsers} /> : <SingUp funcaoCadastro={this.onClickCadastrar} />}
        {this.state.users && <Users />} */}
      </div>
    )
  }
  // state = {
  //   name: "",
  //   listUser: []
  // }

  // listarUsers = () => {

  //   const request = axios.get(
  //     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,

  //     {
  //       headers: {
  //         Authorization: "matheus-candido-jackson"
  //       }
  //     }
  //   )

  //   request
  //     .then((resposta) => {

  //       this.setState({ listUser: resposta.data })
  //       console.log(resposta.data)
  //     })
  //     .catch((error) => {
  //       alert("lista errada")
  //     })
  // }


  // newUser = (nome, email) => {
  //   const body = {
  //     name: nome,
  //     email: email
  //   }

  //   const request = axios.post(
  //     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, body,
  //     {
  //       headers: {
  //         Authorization: "matheus-candido-jackson"
  //       }
  //     }
  //   )
  //   console.log(request)
  //   request
  //     .then((resposta) => {
  //       console.log(`${resposta}`)

  //       this.listarUsers()
  //       alert(`lalala${resposta.config.data.name}`)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       alert("error lul!!")
  //     })
  // }

  // DeleteUser = (id) => {
  //   const request = axios.delete(
  //     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
  //     {
  //       headers: {
  //         Authorization: "matheus-candido-jackson"
  //       }
  //     }
  //   )
  //   console.log(request)
  //   request
  //     .then((resposta) => {
  //       console.log(`lalalalalala ${resposta}`)
  //       // alert(`lalala ${resposta}`)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       // alert(`error lul!! ${error}`)
  //     })
  // }


  // componentDidMount() {
  //   this.listarUsers()
  // }

  // onChangeName = (e) => {
  //   this.setState({ name: e.target.value })
  // }
  // onChangeEmail = (e) => {
  //   this.setState({ email: e.target.value })

  // }

  // render() {
  //   const addOnList = () => {
  //     this.newUser(this.state.name, this.state.email)
  //     this.setState({
  //       name: "",
  //       email: ""
  //     })

  //   }
  //   return (
  //     <div className="App">
  //       <h1>insira seu usuario</h1>
  //       <input value={this.state.name} onChange={(event) => this.onChangeName(event)} />
  //       <input value={this.state.email} onChange={(e) => this.onChangeEmail(e)} />
  //       <button onClick={addOnList}>Criar usuario</button>
  //       <h1>lista usuarios</h1>
  //       {this.state.listUser.map((item) => {
  //         return (
  //           <div>
  //             <p key={item.id}>{item.name} <Del onClick={() => this.DeleteUser(item.id)}>X</Del></p>

  //           </div>
  //         )
  //       })}
  //     </div>
  //   )
  // }
}

