import {
  addItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY': {
      return addItem(state, action.payload);
    }
    case 'UPDATE_ENTRY': {
      return updateItem(state, action.payload);
    }
    case 'REMOVE_ENTRY': {
      return removeItem(state, action.payload);
    }
    case 'ADD_QUESTION': {
      return addReferenceItem(state, action.payload, 'entry', 'questions');
    }
    case 'REMOVE_QUESTION': {
      return removeReferenceItem(state, action.payload, 'entry', 'questions');
    }
    default:
      return state;
  }
};

export default entriesById;
