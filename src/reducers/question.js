import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem,
  changeOrRemoveReferenceValue
} from './core';

const questionsById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_QUESTION': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'REMOVE_QUESTION': {
      return removeItem(state, action.payload);
    }
    case 'UPDATE_QUESTION_ATTRIBUTE': {
      return addOrUpdateItem(state, action.payload);
    }
    case 'ADD_ANSWER': {
      return addReferenceItem(state, action.payload, 'question', 'answers');
    }
    case 'REMOVE_ANSWER': {
      return removeReferenceItem(state, action.payload, 'question', 'answers');
    }
    case 'CHANGE_OR_REMOVE_ANSWER': {
      return changeOrRemoveReferenceValue(state, action.payload, 'question', 'selectedAnswer');
    }
    default:
      return state;
  }
};

export default questionsById;
