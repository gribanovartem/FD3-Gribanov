import { combineReducers } from 'redux';

// import selectReducer from "./selectReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    // selecting: selectReducer, 
    // + другие редьюсеры
});

export default combinedReducer;