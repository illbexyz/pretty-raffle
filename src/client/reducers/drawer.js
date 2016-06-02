import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
} from '../actions/drawer.js';

export default function drawerReducer(state = {
  isOpen: false,
}, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}
