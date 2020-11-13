import React from 'react';
import '../../App.css';
import Router from '../Router/Router';
import Header from '../Pages/PagesFixeds/Header/Header';
import Footer from '../Pages/PagesFixeds/Footer/Footer';
import { Body, Main, Nav, NavFooter } from './styles';
import { BrowserRouter } from 'react-router-dom';

function AppContainer() {
  return (
    <Main className="App">
      <BrowserRouter>
        <Nav>
          <Header />
        </Nav>
        <Body>
          <Router />
        </Body>
        <NavFooter>
          <Footer />
        </NavFooter>

      </BrowserRouter>
    </Main>
  );
}

export default AppContainer;
