import {expect} from 'chai';
import {
  addItem,
  addReferenceItem,
  removeItem,
  removeReferenceItem,
  changeOrRemoveReferenceValue
} from '../src/reducers/core';

describe('application logic', () => {

  describe('addItem', () => {

    it('adds the item to new map if does not exist', () => {
      const state = {};
      const action = {
        type: 'ADD_GAME',
        id: 1,
        name: "Some Game"
      };
      const nextState = addItem(state, action);
      expect(nextState).to.eql({
        1: {
          id: 1,
          name: "Some Game"
        }
      });
    });

    it('adds the item to new map', () => {
      const state = {
        0: {
          id: 0,
          name: 'First Game'
        },
        1: {
          id: 1,
          name: 'Second Game'
        }
      };

      const action = {
        type: 'ADD_GAME',
        id: 3,
        name: "Third Game",
        entries: [1,2,3]
      };

      const nextState = addItem(state, action);

      expect(nextState).to.eql({
        0: {
          id: 0,
          name: 'First Game'
        },
        1: {
          id: 1,
          name: 'Second Game'
        },
        3: {
          id: 3,
          name: 'Third Game',
          entries: [1,2,3]
        }
      });

      expect(state).to.eql({
        0: {
          id: 0,
          name: 'First Game'
        },
        1: {
          id: 1,
          name: 'Second Game'
        }
      });

    });

  });

  describe('addReferenceItem', () => {

    it('adds item to nested list when no list exists', () => {
      const state = {
        0: {
          id: 0,
          name: 'First Game'
        }
      };

      const action = {
        type: 'ADD_ENTRY',
        id: 1,
        name: "First Entry",
        game: 0
      }

      const nextState = addReferenceItem(state, action, "game", "entries");
      expect(nextState).to.eql({
        0: {
          id: 0,
          name: 'First Game',
          entries: [1]
        }
      });

      expect(state).to.eql({
        0: {
          id: 0,
          name: 'First Game'
        }
      });

    });

    it('adds item to nested list', () => {
      const state = {
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2]
        }
      }

      const action = {
        type: 'ADD_ENTRY',
        id: 3,
        name: 'Third Entry',
        game: 0
      }

      const nextState = addReferenceItem(state, action, 'game', 'entries');

      expect(nextState).to.eql({
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2,3]
        }
      });

    });

  });

  describe('removeItem', () => {

    it('removes item from normalized list', () => {
      const state = {
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2]
        },
        1: {
          id: 1,
          name: 'Second Game'
        }
      };

      const action = {
        type: 'REMOVE_GAME',
        id: 1
      };

      const nextState = removeItem(state, action);
      expect(nextState).to.eql({
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2]
        }
      });

      expect(state).to.eql({
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2]
        },
        1: {
          id: 1,
          name: 'Second Game'
        }
      });
    });

    it('removes last item from normalized list', () => {
      const state = {
        0: {
          id: 0,
          name: 'First Game'
        }
      };

      const action = {
        type: 'REMOVE_GAME',
        id: 0
      };

      const nextState = removeItem(state, action);
      expect(nextState).to.eql({});
    });

  });

  describe('removeReferenceItem', () => {

    it('removes item from nested list', () => {
      const state = {
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2,3]
        }
      }

      const action = {
        type: 'REMOVE_ENTRY',
        id: 2,
        game: 0
      }

      const nextState = removeReferenceItem(state, action, 'game', 'entries');
      expect(nextState).to.eql({
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,3]
        }
      });

      expect(state).to.eql({
        0: {
          id: 0,
          name: 'First Game',
          entries: [1,2,3]
        }
      });

    });

    it('removes the last item from nested list', () => {
      const state = {
        0: {
          id: 0,
          entries: [1]
        }
      };

      const action = {
        type: 'REMOVE_ENTRY',
        id: 1,
        game: 0
      };

      const nextState = removeReferenceItem(state, action, 'game', 'entries');
      expect(nextState).to.eql({
        0: {
          id: 0,
          entries: []
        }
      });
    });

  });

  describe('changeOrRemoveReferenceValue', () => {
    it('adds reference value if does not exist', () => {
      const state = {
        0: {
          id: 0
        }
      };

      const action = {
        type: 'CHANGE_OR_REMOVE_ANSWER',
        id: 2,
        question: 0
      };

      const nextState = changeOrRemoveReferenceValue(state, action, 'question', 'selectedAnswer');
      expect(nextState).to.eql({
        0: {
          id: 0,
          selectedAnswer: 2
        }
      });

      expect(state).to.eql({
        0: {
          id: 0
        }
      });

    });

    it('changes reference value', () => {
      const state = {
        0: {
          id: 0,
          selectedAnswer: 4
        }
      };

      const action = {
        type: 'CHANGE_OR_REMOVE_ANSWER',
        id: 2,
        question: 0
      };

      const nextState = changeOrRemoveReferenceValue(state, action, 'question', 'selectedAnswer');
      expect(nextState).to.eql({
        0: {
          id: 0,
          selectedAnswer: 2
        }
      });

      expect(state).to.eql({
        0: {
          id: 0,
          selectedAnswer: 4
        }
      });

    });

    it('removes reference value if same as selected', () => {
      const state = {
        0: {
          id: 0,
          selectedAnswer: 4
        }
      };

      const action = {
        type: 'CHANGE_OR_REMOVE_ANSWER',
        id: 4,
        question: 0
      };

      const nextState = changeOrRemoveReferenceValue(state, action, 'question', 'selectedAnswer');
      expect(nextState).to.eql({
        0: {
          id: 0
        }
      });

      expect(state).to.eql({
        0: {
          id: 0,
          selectedAnswer: 4
        }
      });

    })
  });

});
