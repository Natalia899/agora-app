import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react'

import { Item } from '../src/stores/Item'
import { Inventory as inventory} from '../src/stores/Inventory'
let Inventory = new inventory()

const stores = {
  Inventory
}

ReactDOM.render(
  <Provider {...stores}>
    <App  />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
