import React from 'react'
import CriarPlaylist from './Components/CriarPlaylist/CriarPlaylist'
import Playlists from './Components/Playlists/Playlists'
import Playlist from './Components/Playlist/Playlist'


export default class App extends React.Component {
  state = {
    click: "Criar Playlist",
    idPL: ""
  }

  //Inputs
  onClickCriarPlaylist = () => {
this.setState({click: "Criar Playlist"})
  }

  onClickPlaylists = () => {
    this.setState({click: "Playlists"})
  }

  onClickPlayList = (idL) => {
    this.setState({click: "Playlist",
    idPL: idL})
  }

  render() {
    //Lógica de trocar de página
    const paginaAtual = () => {
      switch (this.state.click) {
        case "Criar Playlist":
          return <CriarPlaylist funcaoPlaylists={this.onClickPlaylists} />

        case "Playlists":
          return <Playlists funcaoCriarPlaylists={this.onClickCriarPlaylist} funcaoPlayList={this.onClickPlayList} />

        case "Playlist":
          return <Playlist funcaoPlaylists={this.onClickPlaylists} idPlayList={this.state.idPL} />

        default:
          break;
      }
    }
    return (
      <div>
        {paginaAtual()}
      </div>
    )
  }
}