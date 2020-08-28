import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const Cabecalho = styled.header`
padding: 20px 20px;
background-color: rgba(34, 34, 34, 0.5);
display: flex;
align-items: center;
justify-content: center;
border-radius: 0 0 90px 90px;
h1 {
  margin: 0;
}
margin-bottom: 10px;
`;

const Conteudo = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;

@media screen and (max-width:400px) {
  padding: 30px 0px;
}
`;

const DivOff = styled.div`
display: flex;
justify-content: center;

`;

const DivLinha = styled.div`
padding: 3px;
padding: 1rem;
background: linear-gradient(to right, red, purple);
border-radius: 1em;
`;

const DivOn = styled.div`
background: rgba(34, 34, 34, 0.9);
color: white;
width: 30vw;
text-align: center;
border-radius: 1rem;
height: 50vh;
  width: 70vw;
  padding: 0 30px;
h3{
    margin: 0;
    padding: 20px 0;
  }

@media screen and (max-width:400px) {
  height: 70vh;
  width: 70vw;
  padding: 0 30px;
  
}
`;

const LinkTrailer = styled.a`
text-decoration: none;
font-size: 20px;
font-weight: bold;
color: black;
:hover{
color:#80bdff;
}
`;

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default class App extends React.Component {
  state = {
    id: "",
    titulo: "",
    descrição: "",
    diretor: "",
    produtor: "",
    release_date: "",
    rt_score: "",
    array: [],
    detalhesFilmes: [],
  };


  pegarFilme = () => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/")
      .then((response) => {
        this.setState({ array: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  pegarDetalhesFilmes = (id) => {
    axios
      .get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((response) => {
        this.setState({
          detalhesFilmes: response.data,
          descricao: response.data.description,
          ano: response.data.release_date,
          diretor: response.data.director
        });


      })
      .catch((error) => {
        console.log(error);
      });
  }

  selecionarFilme = (e) => {
    const nomeFilme = e.target.value;
    this.pegarDetalhesFilmes(nomeFilme)
  }

  componentDidMount() {
    this.pegarFilme();
  };

  render() {
    console.log(this.state.descricao)
    return (

      <div className="App">
        <Cabecalho>
          <h1>Selecione um filme:</h1>
        </Cabecalho>
        <FormControl >
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-select-label"
            id="demo-customized-select"
            onChange={this.selecionarFilme}
            input={<BootstrapInput />}
          >
            {this.state.array.map((filme) => {
              return (
                <MenuItem key={filme.id} value={filme.id}>{filme.title}</MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <Conteudo>
          <DivOff>
            {this.state.descricao ? <DivLinha>
              <DivOn>
                <h3>Descrição do Filme:</h3>
                <p>{this.state.descricao}</p>
                <p><b>Ano:</b> {this.state.ano}</p>
                <p><b>Dirigido por:</b> {this.state.diretor}</p>
                <p><b>Link do Trailer:</b>
                  <LinkTrailer href={"https://www.youtube.com"} target={"blanck"}>
                    <p onClick={() => (window.confirm('Vai ter que procurar o trailer.... Orçamento baixo, tem certeza que deseja continuar???')) ?
                      <LinkTrailer /> : null}>
                      Assistir ao trailer
                  </p>
                  </LinkTrailer>
                </p>
              </DivOn>
            </DivLinha> : null}
          </DivOff>
        </Conteudo>

      </div>
    );
  }
}

