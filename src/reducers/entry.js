import {
  addItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY': {
      return addItem(state, action);
    }
    case 'REMOVE_ENTRY': {
      return removeItem(state, action);
    }
    case 'ADD_QUESTION': {
      return addReferenceItem(state, action, 'entry', 'questions');
    }
    case 'REMOVE_QUESTION': {
      return removeReferenceItem(state, action, 'entry', 'questions');
    }
    default:
      return state;
  }
};

export default entriesById;
