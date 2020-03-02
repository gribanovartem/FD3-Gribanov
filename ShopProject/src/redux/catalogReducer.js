import { CATALOG_DRILLS, CATALOG_ALL, SELECT_CREATE } from './catalogAC';

const initState={
  data:null, 
  ready:false
}

function catalogReducer(state=initState,action) {
  switch (action.type) {
    case CATALOG_ALL: {
      let newState={...state,
        data:action.data,
        name: 'Все категории',
        ready: true,
      };
      return newState;
    }

    case CATALOG_DRILLS: {
      let newState={...state,
            data:action.data,
            name: 'Электродрели и дрели-шуруповерты'
      }
      return newState;
    };
        
      
    default:
      return state;
  }
}

export default catalogReducer;