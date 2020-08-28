import React from 'react';
import '../../App.css';
import axios from "axios"
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles/';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
import { Url, Config } from '../../Constants/axiosconstants'

const InputN = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`;

const Forme = styled.div`
width: 100%;
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
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

export default class SingUp extends React.Component {
    state = {
        iName: "",
        iEmail: ""
    }

    onClickEnter = (event) =>{
        if (event.key==="Enter") {
            this.newUser()
        }
    }

    newUser = async () => {
        const body = {
            name: this.state.iName,
            email: this.state.iEmail
        }
        try {
            const request = await axios.post(Url, body, Config)
            alert(`Success!! User ${this.state.iName} has been created!!`)
            this.setState({ iName: "", iEmail: "" })
        }
        catch (error) {
            alert(error)
        }
    }

    // input controlado
    onChangeName = (e) => {
        this.setState({ iName: e.target.value })
    }
    onChangeEmail = (e) => {
        this.setState({ iEmail: e.target.value })
    }

    render() {
        return (
            <div className="App" >
                <ThemeProvider >
                    <Button onClick={this.props.funcaoUserList} variant="contained" color="secondary">Users page &gt;</Button>
                </ThemeProvider>
                <h1>Sing Up</h1>
                <Forme>
                    <div>
                        <InputN>
                            <ColorButton id="outlined-basic" label="Name" variant="outlined" value={this.state.iName} onChange={(e) => this.onChangeName(e)} onKeyPress={this.onClickEnter}/>
                        </InputN>
                        <InputN>
                            <ColorButton id="outlined-basic" label="Email" variant="outlined" value={this.state.iEmail} onChange={(e) => this.onChangeEmail(e)} onKeyPress={this.onClickEnter}/>
                        </InputN>
                        <Button onClick={this.newUser} variant="contained" color="primary">Sing Up</Button>
                    </div>
                </Forme>

            </div>
        )
    }
}

