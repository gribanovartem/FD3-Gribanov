import {
  CATALOG_DRILLS,
  CATALOG_ALL,
  CATALOG_ROTARYHAMMERS,
  READY_FALSE,
  READY_TRUE,
  CATALOG_ELECTRIC_SAW,
  CATALOG_FRETSAW,
  CATALOG_PLANE,
  CATALOG_OFF,
  CATALOG_ON
} from "./catalogAC";

const initState = {
  data: null,
  ready: false
};

function catalogReducer(state = initState, action) {
  switch (action.type) {
    case READY_FALSE: {
      const newState = { ...state, ready: false };
      return newState;
    }
    case READY_TRUE: {
      const newState = { ...state, ready: true };
      return newState;
    }

    case CATALOG_ALL: {
      const newState = {
        ...state,
        data: action.data,
        name: "Все категории",
        status: 0,
        nav: "/",
        nameEng: "all",
        ready: true
      };
      return newState;
    }

    case CATALOG_DRILLS: {
      const newState = {
        ...state,
        data: action.data,
        name: "Электродрели и дрели-шуруповерты",
        status: 1,
        nav: "/drills",
        nameEng: "drills",
        ready: true
      };
      return newState;
    }

    case CATALOG_ROTARYHAMMERS: {
      const newState = {
        ...state,
        data: action.data,
        name: "Перфораторы",
        status: 1,
        nav: "/rotaryhammers",
        nameEng: "rotaryhammers",
        ready: true
      };
      return newState;
    }

    case CATALOG_ELECTRIC_SAW: {
      const newState = {
        ...state,
        data: action.data,
        name: "Дисковые пилы",
        status: 1,
        nav: "/electric_saw",
        nameEng: "electric_saw",
        ready: true
      };
      return newState;
    }

    case CATALOG_FRETSAW: {
      const newState = {
        ...state,
        data: action.data,
        name: "Электролобзики",
        status: 1,
        nav: "/fretsaw",
        nameEng: "fretsaw",
        ready: true
      };
      return newState;
    }

    case CATALOG_PLANE: {
      const newState = {
        ...state,
        data: action.data,
        name: "Рубанки",
        status: 1,
        nav: "/plane",
        nameEng: "plane",
        ready: true
      };
      return newState;
    }
    case CATALOG_OFF: {
      const newState = {
        ...state,
        status: 0,
      };
      return newState;
    }
    case CATALOG_ON: {
      const newState = {
        ...state,
        status: 1,
      };
      return newState;
    }


    default:
      return state;
  }
}

export default catalogReducer;
