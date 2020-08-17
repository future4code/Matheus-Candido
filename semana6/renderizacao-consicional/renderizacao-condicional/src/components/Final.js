import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
font-family:sans-serif;
text-align:center;
`

class Final extends React.Component {
    render() {
        return (
            <AppContainer>
                <h1>O FORMUÁRIO ACABOU</h1>
                <p>Muito Obrigado por Participar! Entraremos em contato</p>
            </AppContainer>
        )

    };

}

export default Final