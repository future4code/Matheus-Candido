import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'


const AppContainer = styled.div`
font-family: sans-serif;
text-align: center;
`

class Etapa1 extends React.Component {
    render() {
        return (
            <AppContainer>
                <h1> ETAPA 1 - DADOS GERAIS</h1 >
                <PerguntaAberta pergunta={'1.Qual o seu nome?'} />
                <PerguntaAberta pergunta={'2. Qual sua idade?'} />
                <PerguntaAberta pergunta={'3. Qual seu email?'} />
                <PerguntaFechada pergunta={'4. Qual a sua escolaridade?'} 
                select={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
                />
            </AppContainer>
        )

    };

}

export default Etapa1