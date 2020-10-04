import React from 'react';
import './App.css';
import Router from './Router/Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './Assets/Header/Header';
import { useAxios } from './CustomHooks/AxiosConfigs/useAxios';
import { Main, Middle, NavBar } from './style';

function App() {
  const { getAllPosts, posts } = useAxios()

  return (
    <Main>
      <BrowserRouter>

        <NavBar>
          <Header getAllPosts={getAllPosts} />
        </NavBar>

        <Middle>
          <Router getAllPosts={getAllPosts} posts={posts} />
        </Middle>

      </BrowserRouter>
    </Main>
  );
}

export default App;