
export const INIT_GAME = 'INIT_GAME';
export const FLIP_UP_CARD = 'FLIP_UP_CARD';
export const FLIP_DOWN_CARDS = 'FLIP_DOWN_CARDS';
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';



export function initGame() {
  return { type: INIT_GAME };
}

export function flipUpCard(id) {
  return { type: FLIP_UP_CARD, id };
}

export function flipDownCards() {
  return { type: FLIP_DOWN_CARDS };
}


export function shuffleCards() {
  return { type: SHUFFLE_CARDS };
}
