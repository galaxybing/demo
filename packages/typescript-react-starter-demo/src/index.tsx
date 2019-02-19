import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

import Hello from './connectContainers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 2,
  languageName: 'JavaScript',
});

/*
ReactDOM.render(
  <Hello name="galaxyw" enthusiasmLevel={6} />, // import Hello from './components/Hello';
  // document.getElementById('root') as HTMLElement
  document.getElementById('root')!
);
*/

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
