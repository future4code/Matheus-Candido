import React from 'react';
import logo from './logo.svg';
import './App.css';
import { slide as Menu } from 'react-burger-menu';



function App() {
  const titulo = 'Título do vídeo'
  const menu = require('./menu.png')
  const close = require('./close.png')
  const logo = require('./labetube.png')
  const searchLogo = require('./search.png')
  const imagemLogo1 = 'https://picsum.photos/400/400?a=1'
  const imagemLogo2 = 'https://picsum.photos/400/400?a=2'
  const imagemLogo3 = 'https://picsum.photos/400/400?a=3'
  const imagemLogo4 = 'https://picsum.photos/400/400?a=4'
  const imagemLogo5 = 'https://picsum.photos/400/400?a=5'
  const imagemLogo6 = 'https://picsum.photos/400/400?a=6'
  const imagemLogo7 = 'https://picsum.photos/400/400?a=7'
  const imagemLogo8 = 'https://picsum.photos/400/400?a=8'


  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <div>
          <input type="checkbox" id="check" />
          <label id="icone" for="check"><img src={menu} /></label>
        </div>
        <header>

          <img src={logo} alt="" id="logotube" />


          <div>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <button id="pesquisar"><img src={searchLogo} id="search" /></button>
          </div>
          <img src={imagemLogo1} className="imagemlogo" />
        </header>

        <main>
          <div className="barra">
            <nav className="menu-vertical">
              <ul>
                <li className="botoes-meunu-vertical">Início</li>
                <li className="botoes-meunu-vertical">Em alta</li>
                <li className="botoes-meunu-vertical">Inscrições</li>
                <hr />
                <li className="botoes-meunu-vertical">Originais</li>
                <li className="botoes-meunu-vertical">Histórico</li>
              </ul>
            </nav>
          </div>
          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src={imagemLogo1} alt="" />
              <h4><img src={imagemLogo1} className="imagemlogo" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src={imagemLogo2} alt="" />
              <h4><img src={imagemLogo2} className="imagemlogo" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src={imagemLogo3} alt="" />
              <h4><img src={imagemLogo3} className="imagemlogo" alt="" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src={imagemLogo4} alt="" />
              <h4><img src={imagemLogo4} className="imagemlogo" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src={imagemLogo5} alt="" />
              <h4><img src={imagemLogo5} className="imagemlogo" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src={imagemLogo6} alt="" />
              <h4><img src={imagemLogo6} className="imagemlogo" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src={imagemLogo7} alt="" />
              <h4><img src={imagemLogo7} className="imagemlogo" />{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src={imagemLogo8} alt="" />
              <h4><img src={imagemLogo8} className="imagemlogo" />{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
