import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(()=>{
  return [{id: 0, name: '멋진신발', quan: 2}]
})
// state 하나 만든 것

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);