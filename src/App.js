import React, { Component } from 'react';
import Card from './components/Card/Cards';
import Chart from './components/Chart/Chart';
import Header from './components/Header';


import { fetchCounterData } from './services/apiService';

import './App.css';
import Country from './components/Country/Country';


class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchCounterData();

    this.setState({ data: fetchedData })
  }


  handleCountryChange = async (country) => {
    const fetchData = await fetchCounterData(country);

    this.setState({ data: fetchData, country: country })
  };


  render() {
    const { data, country } = this.state;
    return (
      <div className="App" >
        <Header />

        <Country handleCountryChange={this.handleCountryChange} />
        <Card data={data} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
