import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const gamesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_GAME': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'REMOVE_GAME': {
      return removeItem(state, action.payload);
    }
    case 'UPDATE_GAME_ATTRIBUTE': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'ADD_ENTRY': {
      return addReferenceItem(state, action.payload, 'game', 'entries');
    }
    case 'REMOVE_ENTRY': {
      return removeReferenceItem(state, action.payload, 'game', 'entries');
    }
    case 'ADD_QUESTION': {
      return addReferenceItem(state, action.payload, 'game', 'questions');
    }
    case 'REMOVE_QUESTION': {
      return removeReferenceItem(state, action.payload, 'game', 'questions');
    }
    default:
      return state;
  }
}

export default gamesById;
