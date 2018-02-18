import React, {Component} from 'react';
import Card from './Card';
import { connect } from 'react-redux'
import { flipUpCard, flipDownCards, checkMatchedPair, initGame } from '../actions';


 class Game extends Component {
    
    componentDidUpdate(){

      var pippo = this.props;
      if (this.props.secondlastCard) {
          setTimeout(() => {
            this.props.flipDownCards();
          }, 5000);
      }
      
    }

    constructor(props) {
      super(props);
      this.renderCards = this.renderCards.bind(this);
      this.checkMatch = this.checkMatch.bind(this);
    }

     checkMatch(value, id) {
       
      if (this.props.locked) { 
         return;
       }
       
       this.props.onCardClicked(id);
   
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
  
  
  
    render() {

       let btnText = 'Reset';
       if (this.props.matches === this.props.cards.length / 2) {
        //console.log('mosse finali: ' + this.state.nromoves);  
        btnText = 'Hai vinto in ' + this.props.nromoves + ' mosse! Gioca ancora?';
       }
       
       return (
         <div className="Game">
           <div>
             <button onClick={this.props.onPlayAgain}>{btnText}</button>
           </div>
           {this.renderCards(this.props.cards)}
         </div>
       );
     }
}
  
   const mapStateToProps = state => {
    return {
      cards: state.cards,
      matches: state.matches,
      lastCard: state.lastCard,
      secondlastCard: state.secondlastCard,
      locked: state.locked,
      nromoves: state.nromoves
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onCardClicked: id => {
        dispatch(flipUpCard(id));
      },
      flipDownCards: () => {
        dispatch(flipDownCards());
      },
      onPlayAgain: () => {
        dispatch(initGame());
      }

    }
  }

  
  const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game)
  
  export default GameView;