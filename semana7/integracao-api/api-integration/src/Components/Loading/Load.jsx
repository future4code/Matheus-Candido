import React from 'react'
import styled from 'styled-components'
import loading from './img/load.gif'
import CircularProgress from '@material-ui/core/CircularProgress'
import App from '../../App'

const Div2 = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
`;

const Div1 = styled.div`
width:100%;
`

class Load extends React.Component {
    state = {
        done: undefined
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ done: true })
        }, 2000);
    }
    render() {
        return (
            <Div1>{!this.state.done ? (
                <header className="App-header">
                    <img src={loading} className="App-logo" alt="logo" />
                    <Div2>Carregando usuários <Div2><CircularProgress disableShrink /></Div2></Div2>
                </header>
            ) : (
                    <App />
                )}</Div1>
        )
    }
}

export default Load