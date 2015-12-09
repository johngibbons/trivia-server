import {expect} from 'chai';

import entriesById from '../src/reducers/entry';

describe('entries reducer', () => {

  it('handles ADD_ENTRY', () => {
    const initialState = {};
    const action = {
      type: 'ADD_ENTRY',
      payload: {
        id: 0,
        name: 'Sample Entry'
      },
      meta: {remote: true}
    };

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Sample Entry'
      }
    });
  });

  it('handles REMOVE_ENTRY', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Entry Name'
      }
    };
    const action = {
      type: 'REMOVE_ENTRY',
      payload: {
        id: 0
      },
      meta: {remote: true}
    }

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({});
  });

});
