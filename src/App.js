import React from 'react';

import Header from './components/Header';
import Card from './components/Card/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';

import './App.css';


const App = () => {
  return (
    <div className="App" >
      <Header />
      <Country />
      <Card />
      <Chart />
    </div>
  )
}


export default App;
