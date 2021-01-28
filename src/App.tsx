import React from 'react';
import './App.css';
import { Categories } from './Components/Categories';
import { Header } from "./Components/Header";
import { Total } from './Components/Total';




function App() {
  return (

    <div className="app">
      <Header/>
      <Total/>
      <Categories logo="GiAmericanFootballHelmet" Catname="Games"/>
     
    </div>
  );
}

export default App;
