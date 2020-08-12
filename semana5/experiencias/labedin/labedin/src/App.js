import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardIntruso from './components/CardIntruso/CardIntruso';
import logoPost from './img/post.png'
import logoLocation from './img/location.png'
import logoLinkedin from './img/linkedin.png'
import perfil from './img/perfil.png'
import restaurant from './img/restaurant.png'
import marketplace from './img/shopping_cart.png'
import student from './img/student.png'
import language from './img/language.png'
import keyboard from './img/keyboard.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={perfil}
          nome="Matheus Martins"
          descricao="Olá, eu sou o Matheus. Tenho 21 anos e nasci em Curitiba - Paraná. Amo escutar música, tocar violão e comer pão de queijo. Atualmente sou estudante da Labenu, estou fazendo o curso de desenvolvimento fullstack."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">

        <CardPequeno
          imagem={logoPost}
          texto="Email:"
          texto2="JacksonsSemFronteiras@univese.com"
        />

        <CardPequeno
          imagem={logoLocation}
          texto="Endereço:"
          texto2="Rua Anastazio Queiróz, 245"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={restaurant}
          nome="Restaurante do Pedro"
          descricao="Trabalhei como garçon na temporada de 2019."
        />

        <CardGrande
          imagem={marketplace}
          nome="Brasão"
          descricao="Trabalhei na temporada de 2019 como verdureiro e repositor."
        />

        <CardIntruso
          intruso="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Conheça um pouco mais sobre minhas formações"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande
          imagem={student}
          nome="2º Grau completo"
          descricao="Término ano de 2016."
        />
      </div>

      <div className="page-section-container">
        <h2>Cursos</h2>
        <CardGrande
          imagem={language}
          nome="Inglês Básico"
          descricao="Adquiri conhecimentos básicos de inglês e hoje eu tento praticar e expandir o meu conhecimento sozinho."
        />

        <CardGrande
          imagem={keyboard}
          nome="Informática"
          descricao="Foi um dos primeiros cursos que fiz ainda quando eu estava no fundamental. A partir dai, foi um passo a frente para chegar onde cheguei hoje, e onde ainda irei chegar amanhã."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem={logoLinkedin}
          texto="Linkedin"
        />

        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
