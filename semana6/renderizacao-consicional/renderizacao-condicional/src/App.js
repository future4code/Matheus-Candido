import React from 'react';
import './App.css';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const AppContainer = styled.div`
font-family:sans-serif;
background-color: darkcyan;
text-align:center;
`
const Bottao = styled.button`
height: 30px;
font-weight: bold;
border: 2px black solid;
border-radius: 10px;
background-color: brown;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  //TENTATIVA DO DESAFIO 2
  // pularEtapas = () => {
  //   switch (this.props.select) {
  //     case "Ensino médio incompleto":

  //       return this.setState({ etapa: this.state.etapa = 3 });
  //     case "Ensino médio completo":

  //       return this.setState({ etapa: 3 });
  //     case "Ensino superior incompleto":

  //       return this.setState({ etapa: 2 });
  //     case "Ensino superior completo":

  //       return this.setState({ etapa: 2 });
  //     default:
  //       break;

  //   }
  //   return console.log(this.pularEtapas)
  // }


  proximo = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {

    const renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <Final />;
        default:
          return <Final />;
      }
    }
    return (
      <AppContainer>

        {renderizarEtapa()}

        {this.state.etapa < 4 ? <Bottao onClick={this.proximo}>Próxima etapa</Bottao> : <div></div>}
      </AppContainer>

    );
  }
}


export default App;
