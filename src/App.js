import React, { Component, Suspense } from 'react';
import Card from './components/Card/Cards';

import { fetchCounterData } from './services/apiService';


import './App.css';


class App extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchCounterData();

    this.setState({ data: fetchedData })
  }

  render() {

    const { data } = this.state;
    return (
      < div className="App" >
        <Suspense fallback={<h1>Loading Cards</h1>}>
          <Card data={data} />
        </Suspense>
      </div >
    )
  }
}

export default App;
