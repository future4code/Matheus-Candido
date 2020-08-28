import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import App from './App'

const Div2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`;

const DivP = styled.div`
width:100%;
`

export default class Load extends React.Component {
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
            <DivP>{!this.state.done ? (
                <header className="App-header">
                    <Div2><CircularProgress color="secondary" /></Div2>
                </header>
            ) : (
                    <App />
                )}</DivP>
        )
    }
}