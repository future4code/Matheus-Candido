import React from 'react'
import styled from 'styled-components'
import PerguntaFechada from './PerguntaFechada'
import PerguntaAberta from './PerguntaAberta'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`
const Lista = styled.div`
margin:16px 0;
padding:0;
`

class Etapa3 extends React.Component {
    render() {
        return (
            <AppContainer>
                <h1> ETAPA3 - INFORMAÇÕES GERAIS ENSINO</h1 >
                <Lista>
                    <PerguntaAberta pergunta={'5. Por que você terminou um curso de graduação?'} />
                    <PerguntaAberta pergunta={'6. Você fez algum curso complementar?'} />
                    <PerguntaFechada
                        select={[
                            "Nenhum",
                            "Curso de inglês",
                            "Curso de espanhol",
                            "Curso de Japonês"
                        ]}

                    />
                </Lista>
            </AppContainer>
        )

    };

}

export default Etapa3