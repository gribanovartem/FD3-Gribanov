import { createStore } from 'redux';
import combinedReducer from './reducers.js';

let store = createStore(combinedReducer);

export default store;