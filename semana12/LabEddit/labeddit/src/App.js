import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './Assets/Header/Header';
import Footer from './Assets/Footer/Footer';
import styled from "styled-components";
import { useAxios } from './CustomHooks/AxiosConfigs/useAxios';
import logo from './Assets/Imgs/logo.png'

const Main = styled.div`
width: 100%;
height: 100vh;

`;


const NavDown = styled.footer`
width: 100%;
height: 10%;
`;


const Middle = styled.div`
width: 100%;
min-height: 80%;
background: whitesmoke;
background-size: 10px;
`;


const NavBar = styled.header`
width: 100%;
height: 10%;
`;

function App(props) {
  const { getAllPosts, posts } = useAxios()


  return (
    <Main>
      <BrowserRouter>

        <NavBar>
          <Header />
        </NavBar>

        <Middle>
          <Router getAllPosts={getAllPosts} posts={posts} />
        </Middle>

        <NavDown>
          <Footer />
        </NavDown>

      </BrowserRouter>
    </Main>
  );
}

export default App;
