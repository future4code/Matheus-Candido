import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles/';
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                color: 'white',
            },
        },
    },
});

const UserPage = styled.button`
margin-top: 10px;
width: 7%;
height: 25px;
font-size: 15px;
border: 2px solid black;
font-family: 'Roboto', sans-serif;
font-weight: bold;
`;


const Inputs = styled.input`
height: 25%;
display: flex;
flex-direction: column;
margin-bottom: 10px;
border: black solid 3px;
font-family: 'Roboto', sans-serif;

`;


const Forme = styled.div`
width: 100%;
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
`;

const Buton = styled.button`
width: 100%;
height: 30%;
font-size: 15px;
color: black;
cursor: pointer;
border: 2px solid black;
font-family: 'Roboto', sans-serif;
font-weight: bold;
`

export default class SingUp extends React.Component {
    state = {
        Iname: "",
        Iemail: ""
    }



    newUser = (nome, email) => {
        const body = {
            name: nome,
            email: email
        }

        const request = axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, body,
            {
                headers: {
                    Authorization: "matheus-candido-jackson"
                }
            }
        )
        request
            .then((resposta) => {
                alert(`Success user ${this.state.iName} as create!!`)
                this.setState({ iName: "", iEmail: "" })
            })
            .catch((error) => {
                alert(error)
            })

    }

    onChangeName = (e) => {
        this.setState({ iName: e.target.value })
    }
    onChangeEmail = (e) => {
        this.setState({ iEmail: e.target.value })

    }

    render() {
        const addOnList = () => {
            this.newUser(this.state.iName, this.state.iEmail)
        }

        return (
            <div className="App" >
                {/* <header> */}
                <ThemeProvider theme={theme}>
                    <Button onClick={this.props.funcaoUserList} variant="contained" color="secondary">&lt; Users page</Button>
                </ThemeProvider>
                {/* </header> */}
                <h1>Sing Up</h1>
                <Forme>
                    <div>
                        <Inputs value={this.state.iName} onChange={(e) => this.onChangeName(e)} placeholder="Name" />
                        <Inputs value={this.state.iEmail} onChange={(e) => this.onChangeEmail(e)} placeholder="Email" />
                        <Button onClick={addOnList} variant="contained" color="primary">SingUp</Button>
                    </div>
                </Forme>

            </div>
        )
    }
}

