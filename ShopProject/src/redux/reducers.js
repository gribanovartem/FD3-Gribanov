import { combineReducers } from 'redux'

import catalogReducer from "./catalogReducer"
import filterReducer from "./filterReducer"
import reviewsReducer from "./reviewsReducer"
import basketReducer from "./basketReducer"

const combinedReducer=combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
  reviews: reviewsReducer,
  basket: basketReducer,
})

export default combinedReducer
