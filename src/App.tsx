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
      <Categories logo="GiPerspectiveDiceSixFacesRandom" Catname="General Knowledge"/>
      <Categories logo="MdComputer" Catname="Computer"/>
      <Categories logo="GiMaterialsScience" Catname="Science & Nature"/>
      <Categories logo="ImBook" Catname="Books"/>
      <Categories logo="GiAmericanFootballHelmet" Catname="Games"/>
      <Categories logo="AiFillCar" Catname="Vehicals"/>





     
    </div>
  );
}

export default App;
