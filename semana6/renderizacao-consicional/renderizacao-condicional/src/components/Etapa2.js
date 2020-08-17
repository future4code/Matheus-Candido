import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`
const Lista = styled.div`
margin:16px 0;
padding:0;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <AppContainer>
                <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1 >
                <Lista>
                    <PerguntaAberta pergunta={'5. Qual curso?'} />
                    <PerguntaAberta pergunta={'6. Qual a unidade do ensino?'} />
                </Lista>
            </AppContainer>
        )

    };

}

export default Etapa2