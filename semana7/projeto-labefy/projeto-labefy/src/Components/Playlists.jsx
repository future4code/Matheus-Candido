import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles/';
import { Url, Config } from './axiosConstants'

const Principal = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

const Conteudo = styled.div`
b,button{
    cursor: pointer;
    :hover {
        color: red;
    }
}
`;

const Criar = styled.div`
display:flex;
justify-content: center;
margin: 20px 0px;
`;


export default class Playlists extends React.Component {
    state = {
        name: "",
        playLists: [],
        id: ""
    }

    allPlaylists = () => {
        const request = axios.get(Url, Config)
        request
            .then((response) => {
                this.setState({ playLists: response.data.result.list })
                console.log(response.data.result.list)
            }).catch((error) => {
                console.log(error)
            })
    }

    deletePlayList = (id) => {
        const request = axios.delete(`${Url}/${id}`, Config)
        console.log(request)
        request
            .then((response) => {
                alert(`Deleted PlayList`)
                this.allPlaylists()
            }).catch((error) => {
                alert(error)
            })
    }

    componentDidMount() {
        this.allPlaylists()
    }
    render() {
        return (
            <Principal className="App">
                <ThemeProvider>
                    <Button onClick={this.props.funcaoCriarPlaylists} variant="contained" color="Link">Voltar</Button>
                </ThemeProvider>
                {this.state.playLists.map((item) => {
                    return (
                        <Conteudo>
                            <div>
                                <Criar key={item.id} >
                                    <b onClick={() => this.props.funcaoPlayList(item.id)}>{item.name}</b>
                                    <button onClick={() => (window.confirm('Deseja mesmo excluir essa playlist???')) ? this.deletePlayList(item.id) : null}>X</button>
                                </Criar>
                            </div>
                        </Conteudo>
                    )
                })}
            </Principal>
        )
    }
}