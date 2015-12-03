import {expect} from 'chai';

import questionsById from '../src/reducers/question';

describe('questions reducer', () => {

  it('handles ADD_QUESTION', () => {
    const initialState = {};
    const action = {
      type: 'ADD_QUESTION',
      id: 0,
      name: 'Sample Question'
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Sample Question'
      }
    });
  });

  it('handles REMOVE_QUESTION', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Question Name'
      }
    };
    const action = {
      type: 'REMOVE_QUESTION',
      id: 0
    }

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({});
  });

  it('handles ADD_ANSWER', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Question Name'
      }
    };
    const action = {
      type: 'ADD_ANSWER',
      id: 1,
      question: 0
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Question Name',
        answers: [1]
      }
    });
  });

  it('handles REMOVE_ANSWER', () => {
    const initialState = {
      0: {
        id: 0,
        answers: [0, 1, 2]
      }
    };

    const action = {
      type: 'REMOVE_ANSWER',
      id: 1,
      question: 0
    }

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        answers: [0, 2]
      }
    });

  });

  it('handles CHANGE_OR_REMOVE_ANSWER when no answer selected', () => {
    const initialState = {
      0: {
        id: 0
      }
    };

    const action = {
      type: 'CHANGE_OR_REMOVE_ANSWER',
      id: 2,
      question: 0
    };

    const nextState = questionsById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        selectedAnswer: 2
      }
    });

    expect(initialState).to.eql({
      0: {
        id: 0
      }
    });
  });

});
