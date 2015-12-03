import {expect} from 'chai';

import gamesById from '../src/reducers/game';

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
      0: {
        id: 0,
        title: 'Game Name'
      }
    };
    const action = {
      type: 'REMOVE_GAME',
      id: 0
    }

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({});
  });

  it('handles ADD_ENTRY', () => {
    const initialState = {
      0: {
        id: 0,
        title: 'Game Name'
      }
    };
    const action = {
      type: 'ADD_ENTRY',
      id: 1,
      game: 0
    };

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        title: 'Game Name',
        entries: [1]
      }
    });
  });

  it('handles REMOVE_ENTRY', () => {
    const initialState = {
      0: {
        id: 0,
        entries: [0, 1, 2]
      }
    };

    const action = {
      type: 'REMOVE_ENTRY',
      id: 1,
      game: 0
    }

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        entries: [0, 2]
      }
    });

  });
});
