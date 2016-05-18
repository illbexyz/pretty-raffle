import {
  ADD_ENTRIES_LIST,
  EXTRACT,
} from '../actions/raffle';

export default function counterReducer(state = {
  entries: [],
  winner: null,
}, action) {
  switch (action.type) {
    case ADD_ENTRIES_LIST:
      return {
        ...state,
        entries: action.entries,
      };
    case EXTRACT:
      return {
        ...state,
        winner: action.winner,
      };
    default:
      return state;
  }
}
