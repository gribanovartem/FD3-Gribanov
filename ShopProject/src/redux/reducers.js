import { combineReducers } from 'redux'

import catalogReducer from "./catalogReducer"
import filterReducer from "./filterReducer"
import reviewsReducer from "./reviewsReducer"

const combinedReducer=combineReducers({
  // редьюсер countersReducer отвечает за раздел state под именем counters
  // selecting: selectReducer, 
  // + другие редьюсеры
  catalog: catalogReducer,
  filter: filterReducer,
  reviews: reviewsReducer,

})

export default combinedReducer