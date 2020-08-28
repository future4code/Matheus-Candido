import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'
import bgi from '../img/bg.jpg'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import { Url, Config } from '../../Constants/axiosconstants'

const UserC = styled.b`
font-size: 30px;
margin: 0 10px;
:hover {
   cursor: pointer;
   background: linear-gradient(90deg, rgba(255,205,212,1) 0%, rgba(9,9,121,1) 35%, rgba(245,13,87,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const UListas = styled.li`
font-size: 20px;
list-style: upper-roman;
  background: linear-gradient(90deg, rgba(245,13,87,1) 0%, rgba(255,205,212,1) 0%, rgba(9,9,121,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 10px 10px;
display: flex;
justify-content: center;
`;

const Principal = styled.div`
background-image: ${ bgi};
height: 100vh;
font-family: 'Roboto', sans - serif;
`;

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[400],
        '&:hover': {
            backgroundColor: red[700]
        }
    }
}))(IconButton);

export default class Users extends React.Component {
    state = {
        name: "",
        listUser: [],
        id: "",
    }

    listarUsers = () => {
        const request = axios.get(Url,Config)
        request.then((response) => {
            this.setState({ listUser: response.data })
        }).catch((erro) => {
            console.log(erro)
        })
    }

    deleteUser = (id) => {
        const request = axios.delete(`${Url}/${id}`, Config)
        alert(`Deleted user`)

        request.then((response) => {
            console.log(response)
            this.listarUsers()
        })
            .catch((erro) => {
                alert(erro)
            })
    }

    componentDidMount() {
        this.listarUsers()
    }

    render() {
        return (
            <Principal className="App" >
                <header>
                    <Button onClick={this.props.funcaoCadastro} variant="contained" color="secondary">&lt; Sing Up page</Button>
                </header>
                <h1>Users:</h1>
                {this.state.listUser.map((item) => {
                    console.log()
                    return (
                        <div className={() => this.useStyles()}>
                            <UListas key={item.id}>{""}<UserC onClick={() => this.props.funcaoUser(item.id)}>{item.name}{""}</UserC> {""}
                                <ColorButton aria-label="delete" onClick={() => (window.confirm('Deseja mesmo excluir esse nome magnífic???')) ? this.deleteUser(item.id) : null}><DeleteIcon />
                                </ColorButton>
                            </UListas>
                        </div>
                    )
                })}
            </Principal>
        )
    }
}

