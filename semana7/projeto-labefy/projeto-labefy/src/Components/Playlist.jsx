import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Url, Config } from './axiosConstants'
import { red, grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Criar = styled.div`
display:flex;
justify-content: center;
`;

// lib de input
const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: grey[100],
        color: grey[900],
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: grey[400]
        }
    }
}))(TextField);

export default class Playlists extends React.Component {
    state = {
        playList: "",
        NameMusic: "",
        NameArtist: "",
        LinkMusic: ""
    }

    NewMusic = () => {
        const body = {
            name: this.state.NameMusic,
            artist: this.state.NameArtist,
            url: this.state.LinkMusic
        }
        const request = axios.post(`${Url}/${this.props.idPList}`, Config)
        request
            .then((response) => {
                this.setState({
                    NameMusic: "",
                    NameArtist: "",
                    LinkMusic: ""
                })
                console.log("aeee")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        const request = axios.get(`${Url}/${this.props.idPList}`, Config)
        console.log(request)
        request
            .then((response) => {
                this.setState({
                    playList: response.data.result.list,
                })
                console.log(this.state.playList)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

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
            <div className="App">
                <header>
                    <Button onClick={this.props.funcaoPlaylists} variant="contained" color="Link">Voltar</Button>
                </header>
                <Criar>
                    <ColorButton id="outlined-basic" label="Nome da música" variant="outlined" value={this.state.onChangeNameMusic} onChange={(e) => this.onChangeNameMusic(e)} onKeyPress={this.onEnter} />
                </Criar>
                <Criar>
                    <ColorButton id="outlined-basic" label="Nome do artista" variant="outlined" value={this.state.onChangeNameArtist} onChange={(e) => this.onChangeNameArtist(e)} onKeyPress={this.onEnter} />
                </Criar>
                <Criar>
                    <ColorButton id="outlined-basic" label="Link da música" variant="outlined" value={this.state.onChangeLinkMusic} onChange={(e) => this.onChangeLinkMusic(e)} onKeyPress={this.onEnter} />
                </Criar>
                <Criar>
                    <Button variant="contained" color="primary">Adicionar Dados</Button>
                </Criar>
                {this.state.playList.name ? <p>{this.state.playList.name}</p> : null}
                {this.state.playList.artist ? <p>{this.state.playList.artist}</p> : null}
                {this.state.playList.url ? <p>{this.state.playList.url}</p> : null}
            </div>
        )
    }
}