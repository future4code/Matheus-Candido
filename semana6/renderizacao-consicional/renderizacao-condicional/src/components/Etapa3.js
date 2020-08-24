import React from 'react'
import styled from 'styled-components'
import PerguntaFechada from './PerguntaFechada'
import PerguntaAberta from './PerguntaAberta'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`

class Etapa3 extends React.Component {
    render() {
        return (
            <AppContainer>
                <h1> ETAPA3 - INFORMAÇÕES GERAIS ENSINO</h1 >
                    <PerguntaAberta pergunta={'5. Por que você terminou um curso de graduação?'} />
                    <PerguntaAberta pergunta={'6. Você fez algum curso complementar?'} />
                    <PerguntaFechada
                        select={[
                            "Nenhum",
                            "Curso de Inglês",
                            "Curso de Espanhol",
                            "Curso de Japonês"
                        ]}
                    />
            </AppContainer>
        )
    };
}

export default Etapa3