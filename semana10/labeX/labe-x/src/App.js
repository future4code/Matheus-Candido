import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Components/Router/Router';
import Header from './Components/Pages/PagesFixeds/Header/Header';
import Footer from './Components/Pages/PagesFixeds/Footer/Footer';
import styled from "styled-components";

const Main = styled.main`
height: 100vh;
`;

const Nav = styled.header`
height: 10%;
background: #fe0;
`;

const Body = styled.div`
min-height: 80%;
background: lightblue;
`;

const NavFooter = styled.div`
height: 10%;
background: orangered;
`;

function App() {
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

export default App;
