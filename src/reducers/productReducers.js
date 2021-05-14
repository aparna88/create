import {
    FETCH_DATA,
    FILTER_BY_ROCKETNAME,
    FILTER_BY_STATUS,
    FILTER_BY_ISUPCOMING
  } from "../actions/types";
  
  const initState = { items: [], filteredItems: [] };
  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_DATA:
        return { ...state, items: action.payload, filteredItems: action.payload };
      case FILTER_BY_ROCKETNAME:
        return {
          ...state,
          filteredItems: action.payload.items,         
        };
      case FILTER_BY_STATUS:
        return {
          ...state,
          filteredItems: action.payload.items,          
        };
        case FILTER_BY_ISUPCOMING:
          return {
            ...state,
            filteredItems: action.payload.items,            
          };
  
      default:
        return state;
    }
  }
  