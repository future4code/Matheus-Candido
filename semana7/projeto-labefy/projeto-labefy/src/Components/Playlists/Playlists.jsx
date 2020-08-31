import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles/';
import { Url, Config } from '../axiosConfigs/axiosConstants'
import { App, Criar, Conteudo, Cancel } from '../../assets/Styles/Styles'
import cancel from './img/cancel.png'

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
            <App className="App">
                <ThemeProvider>
                    <Button onClick={this.props.funcaoCriarPlaylists} variant="contained" color="Link">Voltar</Button>
                </ThemeProvider>
                {this.state.playLists.map((item) => {
                    return (
                        <div>
                            <div>
                                <Criar key={item.id} >
                                    <b onClick={() => this.props.funcaoPlayList(item.id)}>{item.name}</b>
                                    <Cancel src={cancel} onClick={() => (window.confirm('Deseja mesmo excluir essa playlist???')) ?
                                        (window.confirm('Você está me dizendo que tens a absoluta certeza???')) ?
                                            (window.confirm('Você diz que tem certeza, depois não reclama... certeza disso???')) ?
                                                this.deletePlayList(item.id) : null : null : null} />
                                </Criar>
                            </div>
                        </div>
                    )
                })}
            </App>
        )
    }
}