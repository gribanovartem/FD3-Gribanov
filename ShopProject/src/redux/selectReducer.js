import { SELECT_MOBILE, UNSELECT_MOBILE, SELECT_CREATE } from './selectAC';

const initState={
  
}

function selectReducer(state=initState,action) {
  switch (action.type) {
    case SELECT_CREATE: {
        console.log('action:',action);
        console.log('state до обработки редьюсером:',state);
        let newState={...state,
          [action.mobileId]:{...state[action.mobileId],
            select: false
          }
        };
        console.log('state после обработки редьюсером:',newState);
        return newState;
      }

    case SELECT_MOBILE: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        [action.mobileId]:{...state[action.mobileId],
          select: true
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case UNSELECT_MOBILE: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        [action.mobileId]:{...state[action.mobileId],
            select: false
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default selectReducer;