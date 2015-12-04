import { addItem, removeItem } from './core';

const answersById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ANSWER':
      return addItem(state, action.payload);
    case 'REMOVE_ANSWER':
      return removeItem(state, action.payload);
    default:
      return state;
  }
}

export default answersById;
