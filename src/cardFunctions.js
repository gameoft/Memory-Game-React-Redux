export const NUM_IMAGES = 12;

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
export function shuffleArray(array) {
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

export function generateCardSet() {
   
    return shuffleArray(initialCards());
 
  }