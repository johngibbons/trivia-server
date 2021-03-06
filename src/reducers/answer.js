import { addOrUpdateItem, removeItem } from './core';

const answersById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ANSWER':
      return addOrUpdateItem(state, action.payload);
    case 'REMOVE_ANSWER':
      return removeItem(state, action.payload);
    case 'UPDATE_ANSWER_ATTRIBUTE':
      return addOrUpdateItem(state, action.payload);
    default:
      return state;
  }
}

export default answersById;
