import { FLIP_UP_CARD, FLIP_DOWN_CARDS, SHUFFLE_CARDS, CHECK_MATCHED_PAIR, markPairAsMatched, 
    MARK_PAIR_AS_MATCHED, flipDownPair, FLIP_DOWN_PAIR, INIT_GAME, 
    shuffleCards, checkMatchedPair, flipUpCard } from "./actions";
//import shuffle from 'shuffle-array';
//import { NUM_IMAGES, generateCardSet, getCard, cardsHaveIdenticalImages } from './cardFunctions';
import { NUM_IMAGES, generateCardSet, shuffleArray } from './cardFunctions';

const initialState = {
    cards: generateCardSet(),
    lastCard: undefined,
    locked: false,
    matches: 0,
    nromoves: 0
 };



// The reducer for the game
// state is an object with game state and an array of cards
function memoryGame(state = initialState, action) {
    switch (action.type) {
        case INIT_GAME:
             let newstate = Object.assign({}, initialState, { cards: generateCardSet()} );
             return newstate;
     
        case SHUFFLE_CARDS:
            let newCards = [...state.cards];
            newCards = shuffleArray(newCards);
            return Object.assign({}, state, { cards: newCards } );
    
        case FLIP_UP_CARD:
            //let newCards1 = [...state.cards];     
            let newCards1 = Object.assign({}, state.cards ); 
            newCards1[action.id].flipped = true;    
            
            let newValue = newCards1[action.id].value;
            if (state.lastCard) {
                let nromoves = state.nromoves;
                if (newValue === state.lastCard.value) {
                   let matches = state.matches;
                   newCards1[id].matched = true;
                   newCards1[state.lastCard.id].matched = true;
                   return Object.assign({}, state, { cards: newCards1, locked: false, lastCard: null, matches: matches + 1, nromoves: nromoves + 1 }); 
                } else {
                    return Object.assign({}, state, { cards: newCards1, locked: true  });  
                }
            } else {
                return Object.assign({}, state, { locked: false, lastCard: {id:action.id, value:newValue} }); 
            }

            //return Object.assign({}, state, { cards: newCards1, locked: true } );  
        
            case FLIP_DOWN_CARDS:
                let newCards2 = Object.assign({}, state.cards ); 
                newCards2[action.id].flipped = false;
                newCards2[state.lastCard.id].flipped = false;
                let nromoves = state.nromoves;
                return Object.assign({}, state, { cards: newCards2, lastCard: null, nromoves: nromoves + 1 }); 

        // if (state.numClicksWithinTurn === 2)
        // {
        //   // Two cards are already flipped
        //   // Check for match and trigger a new flip
        //   let s = memoryGame(state, checkMatchedPair());
        //   return memoryGame(s, flipUpCard(action.id));
        // }
  
        // let card = getCard(action.id, state.cards);
        // if (card.imageUp || card.matched) {        
        //   return state;
        // }
  
        // let firstId = state.firstId;
        // let secondId = state.secondId;
        // if (state.numClicksWithinTurn === 0) {
        //   firstId = action.id;
        // } else {
        //   secondId = action.id;
        // }
        // let numClicks = state.numClicksWithinTurn + 1;
  
        // return Object.assign({}, state, { 
        //   firstId: firstId, 
        //   secondId: secondId, 
        //   numClicksWithinTurn : numClicks,
        //   cards: memoryCards(state.cards, action) } );   

        default:
        return state;
    }
}  

export default memoryGame;