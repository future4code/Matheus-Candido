import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components"


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Campos = styled.input`
font-weight:bold;
margin:3px auto;
`

const Botao = styled.button`
width:100px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Estevan',
        fotoUsuario: 'https://picsum.photos/50/90',
        fotoPost: 'https://picsum.photos/200/190'
      },
      {
        nomeUsuario: 'Donatello',
        fotoUsuario: 'https://picsum.photos/50/70',
        fotoPost: 'https://picsum.photos/200/140'
      }
    ],

    valorInputUsuario: "",
    valorInputPerfil: "",
    valorInputPost: ""
  }

  addPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputPerfil,
      fotoPost: this.state.valorInputPost
    }

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      valorInputUsuario: "",
      valorInputPerfil: "",
      valorInputPost: ""
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }
  onChangeInputPerfil = (event) => {
    this.setState({ valorInputPerfil: event.target.value })
  }
  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value })
  }


  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (

        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />

      )
    })
    console.log(listaDePosts)

    return (
      <div >
        <Container>
          <Campos
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome de usuario"}

          />
          <Campos value={this.state.valorInputPerfil}
            onChange={this.onChangeInputPerfil}
            placeholder={"Link Foto perfil"}

          />
          <Campos
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Link Foto Post"}

          />
          <Botao onClick={this.addPost}>Publicar</Botao>
        </Container>

        <div className={'app-container'}>
          <div>{listaDePosts}</div>
        </div>
      </div>
    );
  }
}

export default App;
