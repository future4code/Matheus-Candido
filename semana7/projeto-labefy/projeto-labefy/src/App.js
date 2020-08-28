import React from 'react'
import CriarPlaylist from './Components/CriarPlaylist'
import Playlists from './Components/Playlists'
import Playlist from './Components/Playlist'


export default class App extends React.Component {
  state = {
    click: "Criar Playlist",
    idPlayList: ""
  }

  onClickCriarPlaylist = () => {
this.setState({click: "Criar Playlist"})
  }

  onClickPlaylists = () => {
    this.setState({click: "Playlists"})
  }

  onClickPlayList = (idL) => {
    this.setState({click: "Playlist",
    idPlayList: idL})
  }

  render() {
    const paginaAtual = () => {
      switch (this.state.click) {
        case "Criar Playlist":
          return <CriarPlaylist funcaoPlaylists={this.onClickPlaylists} />

        case "Playlists":
          return <Playlists funcaoCriarPlaylists={this.onClickCriarPlaylist} funcaoPlayList={this.onClickPlayList} />

        case "Playlist":
          return <Playlist funcaoPlaylists={this.onClickPlaylists} idPList={this.state.idPlayList} />

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