import React from "react";
import "./App.css";
import axios from "axios";

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
    detalhesFilmes: []
  };


  pegarFilme = () => {
    axios
      .get("https://ghibliapi.herokuapp.com/films/?limit=10")
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
        this.setState({ detalhesFilmes: response.data, descricao: response.data.description });


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
        <h1>Selecione um filme:</h1>
        <select onChange={this.selecionarFilme}>
          <option value={""}></option>
          {this.state.array.map((filme) => {

            return (
              <option key={filme.id} value={filme.id}>Titulo: { filme.title}</option>

            )

          })}
        </select>
        <div>
          <p>Descrição do Filme</p>
          <p>
            {this.state.descricao}
          </p>
        </div>

      </div>
    );
  }
}

