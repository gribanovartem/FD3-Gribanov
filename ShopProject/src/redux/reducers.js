import { combineReducers } from 'redux'

import catalogReducer from "./catalogReducer"
import filterReducer from "./filterReducer"
import reviewsReducer from "./reviewsReducer"
import basketReducer from "./basketReducer"
import popupReducer from "./popupReducer";

const combinedReducer=combineReducers({
  catalog: catalogReducer,
  filter: filterReducer,
  reviews: reviewsReducer,
  basket: basketReducer,
  popup: popupReducer
})

export default combinedReducer
