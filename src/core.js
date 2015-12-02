export function addItem(state, action) {
  return {...state, [action.id]: {...action}};
}

export function addReferenceItem(state, action, actionKey, referenceName) {
  //get current list of reference item keys
  const refs = state[action[actionKey]][referenceName] || [];
  return {...state,
    [action[actionKey]]: {
      ...state[action[actionKey]],
      [referenceName]: [...refs, action.id]
    }
  };
}

export function removeItem(state, action) {
  let nextState = Object.assign({}, state);
  delete nextState[action.id];
  return nextState;
}

export function removeReferenceItem(state, action, actionKey, referenceName) {
  const refs = state[action[actionKey]][referenceName];
  return {...state,
    [action[actionKey]]: {
      ...state[action[actionKey]],
      [referenceName]: refs.filter(x => x !== action.id)
    }
  };
}