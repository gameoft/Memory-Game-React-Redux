import React, {Component} from 'react';
import Card from './Card';

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function initialCards() {
    return [
      {value: 2, matched: false, flipped: false},
      {value: 4, matched: false, flipped: false},
      {value: 1, matched: false, flipped: false},
      {value: 1, matched: false, flipped: false},
      {value: 3, matched: false, flipped: false},
      {value: 4, matched: false, flipped: false},
      {value: 2, matched: false, flipped: false},
      {value: 3, matched: false, flipped: false},
      {value: 5, matched: false, flipped: false},
      {value: 5, matched: false, flipped: false},
      {value: 6, matched: false, flipped: false},
      {value: 6, matched: false, flipped: false}
    ];
  }

   export default class Game extends Component {
     constructor(props) {
       super(props);
       this.renderCards = this.renderCards.bind(this);
       this.checkMatch = this.checkMatch.bind(this);
       this.reset = this.reset.bind(this);
  
       this.state = {
         cards: shuffleArray(initialCards()),
         lastCard: null,
         locked: false,
         matches: 0,
         nromoves: 0
       };
     }
  
     checkMatch(value, id) {
       if (this.state.locked) {
         return;
       }
  
       let cards = this.state.cards;
       cards[id].flipped = true;
       this.setState({cards, locked: true});
       if (this.state.lastCard) {
        let nromoves = this.state.nromoves;
        if (value === this.state.lastCard.value) {
           let matches = this.state.matches;
           cards[id].matched = true;
           cards[this.state.lastCard.id].matched = true;
           this.setState({cards, lastCard: null, locked: false, matches: matches + 1, nromoves: nromoves + 1});
         } else {
           setTimeout(() => {
             cards[id].flipped = false;
             cards[this.state.lastCard.id].flipped = false;
             this.setState({cards, lastCard: null, locked: false, nromoves: nromoves + 1});
           }, 1000);
         }
       } else {
        this.setState({
           lastCard: {id, value},
           locked: false
         });
       }
     }
  
     renderCards(cards) {
      return cards.map((card, index) => {
        return (
          <Card
            key={index}
            value={card.value}
            id={index}
            matched={card.matched}
            flipped={card.flipped}
            checkMatch={this.checkMatch} />
        );
      });
    }
  
     reset() {
       this.setState({
         cards: shuffleArray(initialCards()),
         lastCard: null,
         locked: false,
         matches: 0,
         nromoves: 0
       });
       
     }
  
     render() {
       let btnText = 'Reset';
       if (this.state.matches === this.state.cards.length / 2) {
         //console.log('mosse finali: ' + this.state.nromoves);  
         btnText = 'Hai vinto in ' + this.state.nromoves + ' mosse! Gioca ancora?';
       }
       return (
         <div className="Game">
           <div>
             <button onClick={this.reset}>{btnText}</button>
           </div>
           {this.renderCards(this.state.cards)}
         </div>
       );
     }
   }
  