import React, { useState } from 'react';
import './App.css';
import { Context } from './Components/Context';
import { Header } from "./Components/Header";
import { Main } from './Components/main';




function App() {
  
  return (

    <div className="app">
      <Header />
      <Context>
       <Main/>
      </Context>
    </div>
  );
}

export default App;
