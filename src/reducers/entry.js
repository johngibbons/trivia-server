import {
  addOrUpdateItem,
  removeItem
} from './core';

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'UPDATE_ENTRY_ATTRIBUTE': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'ADD_OR_UPDATE_SELECTION': {
      const payload = action.payload;
      const entry = state[payload.entry] || {};
      const selections = entry.selections || {};
      const newSelection = {[payload.question]: payload.selection};
      const newSelections = {
        ...selections, ...newSelection
      };
      return {...state, [payload.entry]: {...state[payload.entry], selections: newSelections}};
    }
    case 'REMOVE_ENTRY': {
      return removeItem(state, action.payload);
    }
    default:
      return state;
  }
};

export default entriesById;
