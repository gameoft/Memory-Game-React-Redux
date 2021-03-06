import { FLIP_UP_CARD, FLIP_DOWN_CARDS, SHUFFLE_CARDS, CHECK_MATCHED_PAIR, markPairAsMatched, 
    MARK_PAIR_AS_MATCHED, flipDownPair, FLIP_DOWN_PAIR, INIT_GAME, 
    shuffleCards, checkMatchedPair, flipUpCard } from "./actions";
//import shuffle from 'shuffle-array';
//import { NUM_IMAGES, generateCardSet, getCard, cardsHaveIdenticalImages } from './cardFunctions';
import { NUM_IMAGES, generateCardSet, shuffleArray } from './cardFunctions';

const initialState = {
    cards: generateCardSet(),
    lastCard: undefined,
    secondlastCard: undefined,
    locked: false,
    matches: 0,
    nromoves: 0
 };



// The reducer for the game
// state is an object with game state and an array of cards
function memoryGame(state = initialState, action) {
    switch (action.type) {
        case INIT_GAME:
           return Object.assign({}, initialState, { cards: generateCardSet()} );
     
        case SHUFFLE_CARDS:
            let newCards = [...state.cards];
            newCards = shuffleArray(newCards);
            return Object.assign({}, state, { cards: newCards } );
    
        case FLIP_UP_CARD:
            state.cards[action.id].flipped = true;    
            
            if (state.lastCard) {
                let nromoves = state.nromoves;
                if (state.cards[action.id].value === state.lastCard.value) {
                   let matches = state.matches;
                   state.cards[action.id].matched = true;
                   state.cards[state.lastCard.id].matched = true;
                   return Object.assign({}, state, { locked: false, lastCard: null, secondlastCard: null, matches: matches + 1, nromoves: nromoves + 1 }); 
                } else {
                    return Object.assign({}, state, { locked: true, secondlastCard: {id:action.id, value:state.cards[action.id].value}  });  
                }
            } else {
                return Object.assign({}, state, { locked: false, lastCard: {id:action.id, value:state.cards[action.id].value} }); 
            }

        
            case FLIP_DOWN_CARDS:
                state.cards[state.lastCard.id].flipped = false;
                state.cards[state.secondlastCard.id].flipped = false;
                
                //let nromoves = state.nromoves;
                return Object.assign({}, state, { lastCard: null, secondlastCard: null, nromoves: state.nromoves + 1, locked: false }); 

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