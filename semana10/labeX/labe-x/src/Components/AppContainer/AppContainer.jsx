import React from 'react';
import '../../App.css';
import Router from '../Router/Router';
import Header from '../Pages/PagesFixeds/Header/Header';
import Footer from '../Pages/PagesFixeds/Footer/Footer';
import { Body, Main, Nav, NavFooter } from './styles';

function AppContainer() {
  return (
    <Main className="App">
      <Nav>
        <Header />
      </Nav>
      <Body>
        <Router />
      </Body>
      <NavFooter>
        <Footer />
      </NavFooter>

    </Main>
  );
}

export default AppContainer;
