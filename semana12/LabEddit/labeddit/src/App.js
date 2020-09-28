import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Router />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
