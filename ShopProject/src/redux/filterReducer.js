import {FILTER_ON, FILTER_OFF , PRICE_MIN, PRICE_MAX, IS_ON_SALE} from './filterAC';

const initState={
    priceMin: null, 
    priceMax: null, 
    isFilter: false,
    isOnSale: false,
}

function filterReducer(state=initState,action) {
    switch (action.type) {
      case FILTER_ON: {
        let newState={...state,
            isFilter: true,
        };
        return newState;
      }
      case FILTER_OFF: {
        let newState={...state,
            isFilter: false,
        };
        return newState;
      }
      case IS_ON_SALE: {
        let newState={...state,
            isOnSale: true,
        };
        return newState;
      }
      case PRICE_MIN: {
        let newState={...state,
            priceMin: action.priceMin,
        };
        return newState;
      }
      case PRICE_MAX: {
        let newState={...state,
            priceMax: action.priceMax,
        };
        return newState;
      }
      default:
        return state;
    }
}

export default filterReducer;
