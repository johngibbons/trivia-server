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

  it('handles ADD_QUESTION', () => {
    const initialState = {
      0: {
        id: 0,
        name: 'Entry Name'
      }
    };
    const action = {
      type: 'ADD_QUESTION',
      payload: {
        id: 1,
        entry: 0
      },
      meta: {remote: true}
    };

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        name: 'Entry Name',
        questions: [1]
      }
    });
  });

  it('handles REMOVE_QUESTION', () => {
    const initialState = {
      0: {
        id: 0,
        questions: [0, 1, 2]
      }
    };

    const action = {
      type: 'REMOVE_QUESTION',
      payload: {
        id: 1,
        entry: 0
      },
      meta: {remote: true}
    }

    const nextState = entriesById(initialState, action);
    expect(nextState).to.eql({
      0: {
        id: 0,
        questions: [0, 2]
      }
    });

  });
});
