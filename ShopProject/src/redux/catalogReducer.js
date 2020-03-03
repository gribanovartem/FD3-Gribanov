import { CATALOG_DRILLS, CATALOG_ALL, CATALOG_ROTARYHAMMERS, READY_FALSE, CATALOG_ELECTRIC_SAW } from './catalogAC';

const initState={
  data:null, 
  ready:false
}

function catalogReducer(state=initState,action) {
  switch (action.type) {
    case READY_FALSE: {
      let newState={...state,
        ready: false,
      };
      return newState;
    }

    case CATALOG_ALL: {
      let newState={...state,
        data: action.data,
        name: 'Все категории',
        status: 0,
        ready: true,
      };
      return newState;
    }

    case CATALOG_DRILLS: {
      let newState={...state,
        data: action.data,
        name: 'Электродрели и дрели-шуруповерты',
        status: 1,
        nav: '/drills',
        ready: true,
      }
      return newState;
    };

    case CATALOG_ROTARYHAMMERS: {
      let newState={...state,
        data: action.data,
        name: 'Перфораторы',
        status: 1,
        nav: '/rotaryhammers',
        ready: true,
      }
      return newState;
    };
        
    case CATALOG_ELECTRIC_SAW: {
      let newState={...state,
        data: action.data,
        name: 'Дисковые пилы',
        status: 1,
        nav: '/electric_saw',
        ready: true,
      }
      return newState;
    };
      
    default:
      return state;
  }
}

export default catalogReducer;