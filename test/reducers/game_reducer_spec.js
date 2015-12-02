import {expect} from 'chai';

import {gamesById} from '../../src/reducers/game';

describe('games reducer', () => {

  it('handles ADD_GAME', () => {
    const initialState = {};
    const action = {
      type: 'ADD_GAME',
      id: 0,
      title: 'Sample Game'
    };

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        title: 'Sample Game'
      }
    });
  });

  it('handles REMOVE_GAME', () => {
    const initialState = {
    };
    const action = {
      type: 'REMOVE_GAME',
      id: 0
    }

  });
});
