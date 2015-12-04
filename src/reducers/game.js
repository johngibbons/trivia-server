import {
  addItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const gamesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_GAME': {
      return addItem(state, action.payload);
    }
    case 'REMOVE_GAME': {
      return removeItem(state, action.payload);
    }
    case 'ADD_ENTRY': {
      return addReferenceItem(state, action.payload, 'game', 'entries');
    }
    case 'REMOVE_ENTRY': {
      return removeReferenceItem(state, action.payload, 'game', 'entries');
    }
    default:
      return state;
  }
}

export default gamesById;
