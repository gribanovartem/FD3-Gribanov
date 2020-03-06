import {FILTER_ON, FILTER_OFF , PRICE_MIN, PRICE_MAX, IS_ON_SALE_TRUE, IS_ON_SALE_FALSE, NEW_CATALOG} from './filterAC';

const initState={
    priceMin: null, 
    priceMax: null, 
    isFilter: false,
    isOnSale: false,
    newCatalog: null,
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
      case IS_ON_SALE_TRUE: {
        let newState={...state,
            isOnSale: true,
        };
        return newState;
      }
      case IS_ON_SALE_FALSE: {
        let newState={...state,
            isOnSale: false,
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
      case NEW_CATALOG: {
        let newState={...state,
            newCatalog: action.newCatalog,
        };
        return newState;
      }
      default:
        return state;
    }
}

export default filterReducer;
