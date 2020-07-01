import React from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './components/context/DataProvider';
import App from './App';

import './index.css';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
);
