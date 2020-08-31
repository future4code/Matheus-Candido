import React from 'react'
import { Loading } from '../../assets/Styles/Styles'
import play from './img/play.gif'
import App from '../../App';

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
            <div>{!this.state.done ? (
                <Loading className="App-header">
                    <img src={play} className="App-logo" alt="logo" />
                </Loading>
            ) : (
                    <App />
                )}</div>
        )
    }
}