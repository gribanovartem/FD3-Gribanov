import { FILTER_ON, FILTER_OFF , PRICE_MIN, PRICE_MAX, IS_ON_SALE_TRUE, IS_ON_SALE_FALSE, NEW_CATALOG } from './filterAC'

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
      const newState={ ...state,
        isFilter: true,
      }
      return newState
    }
    case FILTER_OFF: {
      const newState={ ...state,
        isFilter: false,
      }
      return newState
    }
    case IS_ON_SALE_TRUE: {
      const newState={ ...state,
        isOnSale: true,
      }
      return newState
    }
    case IS_ON_SALE_FALSE: {
      const newState={ ...state,
        isOnSale: false,
      }
      return newState
    }
    case PRICE_MIN: {
      const newState={ ...state,
        priceMin: action.priceMin,
      }
      return newState
    }
    case PRICE_MAX: {
      const newState={ ...state,
        priceMax: action.priceMax,
      }
      return newState
    }
    case NEW_CATALOG: {
      const newState={ ...state,
        newCatalog: action.newCatalog,
      }
      return newState
    }
    default:
      return state
  }
}

export default filterReducer
