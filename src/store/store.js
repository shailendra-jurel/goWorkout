//  store.js

import { createStore } from 'redux';
import workoutReducer from './reducers';
import { loadState, saveState } from '../utils/localStorage';

// Load state from localStorage if it exists
const persistedState = loadState();

const store = createStore(
  workoutReducer,
  persistedState // Initial state is loaded from localStorage
);

// Save the state to localStorage every time the store changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
