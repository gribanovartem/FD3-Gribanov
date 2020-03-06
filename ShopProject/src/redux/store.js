import { createStore } from 'redux'
import combinedReducer from './reducers.js'

const store = createStore(combinedReducer)

export default store