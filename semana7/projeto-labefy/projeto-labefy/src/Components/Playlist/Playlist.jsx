import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { Url, Config } from '../axiosConfigs/axiosConstants'
import { ColorButton, CriarDetalhes, Musicas, App } from '../../assets/Styles/Styles'
import { ThemeProvider } from '@material-ui/core/styles/';

export default class Playlists extends React.Component {
    state = {
        playList: [],
        NameMusic: "",
        NameArtist: "",
        LinkMusic: ""
    }

    onEnter = (e) => {
        if (e.key === "Enter") {
            this.NewMusic()
        }
    }

    //Método de criar detalhes na playlist
    NewMusic = () => {
        const body = {
            name: this.state.NameMusic,
            artist: this.state.NameArtist,
            url: this.state.LinkMusic
        }
        const request = axios.post(`${Url}/${this.props.idPlayList}/tracks`, body, Config)
        request
            .then((response) => {
                this.setState({
                    NameMusic: "", NameArtist: "", LinkMusic: ""
                })
                alert(`Playlist has been create!!! Refresh this page appy updates!!!`)
            })
            .catch((error) => {
                alert(error)
            })
    }

    //Método de pegar detalhes na playlist
    DadosPlaylist = () => {
        const request = axios.get(`${Url}/${this.props.idPlayList}/tracks`, Config)
        request
            .then((response) => {
                this.setState({
                    playList: response.data.result.tracks,
                })
            })
            .catch((error) => {
                console.log(error.response)
                alert(error.response)
            })
    }

    componentDidMount() {
        this.DadosPlaylist()
    }

    //Inputs
    onChangeNameMusic = (e) => {
        this.setState({ NameMusic: e.target.value })
    }

    onChangeNameArtist = (e) => {
        this.setState({ NameArtist: e.target.value })
    }

    onChangeLinkMusic = (e) => {
        this.setState({ LinkMusic: e.target.value })
    }

    render() {
        return (
            <App className="App">
                <ThemeProvider>
                    <Button onClick={this.props.funcaoPlaylists} variant="contained" color="Link">Voltar</Button>
                </ThemeProvider>
                <CriarDetalhes>
                    <ColorButton id="outlined-basic" label="Nome da música" variant="outlined" value={this.state.NameMusic} onChange={(e) => this.onChangeNameMusic(e)} onKeyPress={this.onEnter} />
                </CriarDetalhes>
                <CriarDetalhes>
                    <ColorButton id="outlined-basic" label="Nome do artista" variant="outlined" value={this.state.NameArtist} onChange={(e) => this.onChangeNameArtist(e)} onKeyPress={this.onEnter} />
                </CriarDetalhes>
                <CriarDetalhes>
                    <ColorButton id="outlined-basic" label="Link da música" variant="outlined" value={this.state.LinkMusic} onChange={(e) => this.onChangeLinkMusic(e)} onKeyPress={this.onEnter} />
                </CriarDetalhes>
                <CriarDetalhes>
                    <Button variant="contained" color="primary" onClick={this.NewMusic}>Adicionar Dados</Button>
                </CriarDetalhes>
                {this.state.playList.map((item) => {
                    return (
                        <Musicas key={item.id}>
                            {/* Lógica que se não existir o objeto a ser renderizado do array, os nomes indicativos "Name/Artist" não irão aparecer na tela*/}
                            {item.name ? <p><b>Name:</b> {item.name}</p> : null}
                            {item.artist ? <p><b>Artist:</b>  {item.artist}</p> : null}
                            {item.url ? <div><audio src={item.url} controls>{item.url}</audio></div> : null}
                        </Musicas>
                    )
                })}
            </App>
        )
    }
}