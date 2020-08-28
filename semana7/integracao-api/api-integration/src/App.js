import React from 'react';
import './App.css';
import styled from 'styled-components'
import SingUp from './Components/SingUp/SingUp';
import UsersList from './Components/Users/UsersList';
import Users from './Components/Users/Users'

export default class App extends React.Component {
  state = {
    click: "cadastro",
    idUsers: ""
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
  onClickUsers = (idU) => {
    this.setState({
      click: "users",
      idUsers: idU
    });

  };
  render() {
    console.log(this.state.click)
    const pagina = () => {
      switch (this.state.click) {
        case "cadastro":
          return <SingUp funcaoUserList={this.onClickUsersList} />

        case "lista":
          return <UsersList funcaoCadastro={this.onClickCadastrar} funcaoUser={this.onClickUsers} />

        case "users":
          return <Users funcaoUserList={this.onClickUsersList} idUser={this.state.idUsers} />

        default:
          break;
      }
    }
    return (
      <div>
        {pagina()}
      </div>
    )
  }
}