import {expect} from 'chai';

import gamesById from '../src/reducers/game';

describe('games reducer', () => {

  it('handles ADD_GAME', () => {
    const initialState = {};
    const action = {
      type: 'ADD_GAME',
      payload: {
        id: 0,
      },
      meta: {remote: true}
    };

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
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
      payload: {
        id: 0
      },
      meta: {remote: true}
    }

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({});
  });

  it('handles UPDATE_GAME_ATTRIBUTE', () => {
    const initialState = {
      0: {
        id: 0
      }
    };

    const action = {
      type: 'UPDATE_GAME_ATTRIBUTE',
      payload: {
        id: 0,
        title: "New Title"
      },
      meta: {remote: true}
    }

    const nextState = gamesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        title: "New Title"
      }
    });
    expect(initialState).to.eql({
      0: {
        id: 0
      }
    });
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
      payload: {
        id: 1,
        game: 0
      },
      meta: {remote: true}
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
      payload: {
        id: 1,
        game: 0
      },
      meta: {remote: true}
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
