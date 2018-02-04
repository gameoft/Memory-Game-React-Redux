/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('./assets/app.scss');

console.log('hi');

ReactDOM.render(<App />, document.getElementById('app'));
