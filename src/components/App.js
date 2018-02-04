import React, {Component} from 'react';
import Game from './Game';

export default class App extends Component {
  render() {
    return (
      <div>
         <h1>Memory Game</h1>
         <Game />
      </div>
    );
  }
}
