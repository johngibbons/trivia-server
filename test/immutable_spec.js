import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a list', () => {

    function addItem(currentState, item) {
      return currentState.push(item);
    }

    it('is immutable', () => {
      let state = List.of('First Item', 'Second Item');
      let nextState = addItem(state, 'Third Item');

      expect(nextState).to.equal(List.of(
        'First Item',
        'Second Item',
        'Third Item'
      ));
      expect(state).to.equal(List.of(
        'First Item',
        'Second Item'
      ));
    });

  });

  describe('a map', () => {

    function addItem(currentState, item) {
      return currentState.set(
        'items',
        currentState.get('items').push(item)
      );
    }

    it('is immutable', () => {
      let state = Map({
        items: List.of('First Item', 'Second Item')
      });
      let nextState = addItem(state, 'Third Item');

      expect(nextState).to.equal(Map({
        items: List.of(
          'First Item',
          'Second Item',
          'Third Item'
        )
      }));
      expect(state).to.equal(Map({
        items: List.of(
          'First Item',
          'Second Item'
        )
      }));
    });

    function addItemUsingUpdate(currentState, item){
      return currentState.update('items', items => items.push(item));
    }

    it('is immutable using update', () => {
      let state = Map({
        items: List.of('First Item', 'Second Item')
      });
      let nextState = addItemUsingUpdate(state, 'Third Item');

      expect(nextState).to.equal(Map({
        items: List.of(
          'First Item',
          'Second Item',
          'Third Item'
        )
      }));
      expect(state).to.equal(Map({
        items: List.of(
          'First Item',
          'Second Item'
        )
      }));

    })

  });

});
