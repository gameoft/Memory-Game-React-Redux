import React, {Component} from 'react';
import Card from './Card';
import { connect } from 'react-redux'
import { flipUpCard, checkMatchedPair, initGame } from '../actions';


 class Game extends Component {
  componentWillMount() {
    //setInterval(this.props.onCheckForMatchedPair,5000);
  }

  componentDidUpdate(){

    var pippo = '';
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
       let cards = this.props.cards;
      //  if (this.props.locked) {
      //   setTimeout(() => {
      //     this.props.flipDownCards(id);
      //   }, 1000);

      //  }
       

      //  if (this.props.lastCard) {
      //   let nromoves = this.props.nromoves;
      //   if (value === this.props.lastCard.value) {
      //      let matches = this.props.matches;
      //      cards[id].matched = true;
      //      cards[this.state.lastCard.id].matched = true;
      //      this.setState({cards, lastCard: null, locked: false, matches: matches + 1, nromoves: nromoves + 1});
      //    } else {
      //      setTimeout(() => {
      //        cards[id].flipped = false;
      //        cards[this.state.lastCard.id].flipped = false;
      //        this.setState({cards, lastCard: null, locked: false, nromoves: nromoves + 1});
      //      }, 1000);
      //    }
      //  } else {
      //   this.setState({
      //      lastCard: {id, value},
      //      locked: false
      //    });
      //  }
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
      
      //  let gameStatus = <div className='Game-status'>
      //                 <div>Turn: {this.props.turnNo}</div>
      //                 <div>Pairs found: {this.props.pairsFound}</div>
      //               </div>;
       
       
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
      turnNo: state.turnNo,
      gameComplete: state.gameComplete,
    
      matches: state.matches,
      lastCard: state.lastCard,
      locked: state.locked,
      nromoves: state.nromoves
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onCardClicked: id => {
        dispatch(flipUpCard(id));
      },
      flipDownCards: id => {
        dispatch(flipDownCards(id));
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