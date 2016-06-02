import {
  EXTRACT,
  CHANGE_LIST,
  UPDATE_ENTRIES,
} from '../actions/raffle';

export default function counterReducer(state = {
  entries: null,
  winner: null,
  currentIndex: null,
}, action) {
  switch (action.type) {
    case UPDATE_ENTRIES:
      return {
        ...state,
        entries: action.entries,
      };
    case EXTRACT:
      return {
        ...state,
        winner: action.winner,
      };
    case CHANGE_LIST:
      return {
        ...state,
        currentIndex: action.index,
        entries: action.entries,
        winner: null,
      };
    default:
      return state;
  }
}
