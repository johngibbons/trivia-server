import {createStore} from 'redux';
import rootReducer from './reducers/index';

export default function makeStore() {
  return createStore(rootReducer);
}
