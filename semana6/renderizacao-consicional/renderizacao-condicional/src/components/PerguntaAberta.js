import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`
const Lista = styled.div`
margin: 16px 0;
padding:0;
`
const Input = styled.input`
width: 200px;
height: 25px;
border: 2px black solid;
border-radius:10px;
`

class PerguntaAberta extends React.Component {
    state = {
        perguntas: ""
    }
    render() {
        return (
            <AppContainer>
                <Lista>
                    <h4>{this.props.pergunta}</h4>
                    <Input type="text" />
                </Lista>
            </AppContainer>
        )
    }
}

export default PerguntaAberta;