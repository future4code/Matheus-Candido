import React from 'react'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core/styles/';
import Button from '@material-ui/core/Button'
import { Url, Config } from '../axiosConfigs/axiosConstants'
import {App, ColorButton, Criar, Conteudo} from '../../assets/Styles/Styles'

export default class CriarPlaylist extends React.Component {
    state = {
        NamePlaylist: ""
    }

    onEnter = (event) => {
        if (event.key === "Enter") {
            this.NewPlaylists()
        }
    }

    NewPlaylists = () => {
        const body = {
            name: this.state.NamePlaylist
        }
        const request = axios.post(Url, body, Config)
        request
            .then((response) => {
                this.setState({ NamePlaylist: "" })
                alert(`Playlist Criada!!!`)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onChangePlaylist = (e) => {
        this.setState({ NamePlaylist: e.target.value })
    }

    render() {
        return (
            <App className="App">
                <ThemeProvider >
                    <Button onClick={this.props.funcaoPlaylists} variant="contained" color="secondary">All Playlists &gt;</Button>
                </ThemeProvider>
                <div>
                    <div>
                        <Criar>
                            <ColorButton id="outlined-basic" label="Playlist" variant="outlined" value={this.state.NamePlaylist} onChange={(e) => this.onChangePlaylist(e)} onKeyPress={this.onEnter} />
                        </Criar>
                        <Criar>
                            <Button onClick={this.NewPlaylists} variant="contained" color="primary">Criar Playlist</Button>
                        </Criar>
                    </div>
                </div>
            </App>
        )
    }
}