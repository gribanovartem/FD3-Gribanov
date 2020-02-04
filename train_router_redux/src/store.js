import { createStore } from 'redux';
import combinedReducer from './redux/reducers.js';

let store = createStore(combinedReducer);

export default store;