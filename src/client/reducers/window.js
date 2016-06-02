import {
  RESIZE,
} from '../actions/window.js';

export default function windowReducer(state = {
  width: window.innerWidth,
  height: window.innerHeight,
}, action) {
  switch (action.type) {
    case RESIZE:
      return {
        width: action.size.width,
        height: action.size.height,
      };
    default:
      return state;
  }
}
