import React from 'react';
import './App.css';
import { Context } from './Components/Context';
import { Header } from "./Components/Header";
import { Main } from './Components/main';
function App() {
  
  return (

    <div className="app">
        <Context>
      <Header />
       <Main/>
      </Context>
    </div>
  );
}

export default App;
