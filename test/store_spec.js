import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();

    expect(store.getState()).to.eql({
      answersById: {},
      entriesById: {},
      gamesById: {},
      questionsById: {}
    });

    store.dispatch({
      type: 'ADD_GAME',
      id: 0,
      title: 'Sample'
    });

    expect(store.getState()).to.eq;({
      gamesById: {
        0: {
          id: 0,
          title: 'Sample'
        }
      }
    });

  });
});
