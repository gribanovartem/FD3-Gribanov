import { combineReducers } from 'redux';

import catalogReducer from "./catalogReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    // selecting: selectReducer, 
    // + другие редьюсеры
    catalog: catalogReducer,

});

export default combinedReducer;