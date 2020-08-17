import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`
const Lista = styled.div`
margin:16px 0;
padding:0;
`

class PerguntaFechada extends React.Component {
    render() {
        const opcoesArray = this.props.select.map((opcoes)=> {
            return <option value={opcoes}>{opcoes}</option>;
        })
        return (
            <AppContainer>
                <Lista>
                    <h4>{this.props.pergunta}</h4>
                    <select>
                        {opcoesArray}
                    </select>
                </Lista>
            </AppContainer>
        )
    }
}

export default PerguntaFechada