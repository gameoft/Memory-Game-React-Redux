/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/app.scss';
import { createStore } from 'redux'
import memoryGame from './reducers'
import { shuffleCards } from './actions';
import { Provider } from 'react-redux'

console.log('hi');

let store = createStore(memoryGame);
//store.dispatch(shuffleCards());

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app'));