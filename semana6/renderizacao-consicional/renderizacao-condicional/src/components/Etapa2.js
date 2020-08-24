import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <AppContainer>
                <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1 >
                    <PerguntaAberta pergunta={'5. Qual curso?'} />
                    <PerguntaAberta pergunta={'6. Qual a unidade do ensino?'} />
            </AppContainer>
        )
    };
}

export default Etapa2