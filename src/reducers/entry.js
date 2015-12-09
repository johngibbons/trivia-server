import {
  addOrUpdateItem,
  removeItem
} from './core';

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'UPDATE_ENTRY': {
      return updateItem(state, action.payload);
    }
    case 'REMOVE_ENTRY': {
      return removeItem(state, action.payload);
    }
    default:
      return state;
  }
};

export default entriesById;
