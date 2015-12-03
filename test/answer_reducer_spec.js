import {expect} from 'chai';

import answersById from '../src/reducers/answer';

describe('answer reducer', () => {

  it('handles ADD_ANSWER', () => {
    const initialState = {};
    const action = {
      type: 'ADD_ANSWER',
      id: 0,
      name: 'Sample Answer'
    };

    const nextState = answersById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Sample Answer'
      }
    });
  });

  it('handles REMOVE_ANSWER', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Answer Name'
      }
    };
    const action = {
      type: 'REMOVE_ANSWER',
      id: 0
    }

    const nextState = answersById(initialState, action);
    expect(nextState).to.eql({});
  });

});
