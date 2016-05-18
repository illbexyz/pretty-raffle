import {
  ADD_ENTRIES_LIST,
  EXTRACT,
  TOGGLE_ENTRIES,
} from '../actions/raffle';

import { entriesShirts, entriesTotal } from '../config/data';

function toggle(currentType) {
  if (currentType === 'total') {
    return {
      entries: entriesShirts,
      entriesType: 't-shirts',
    };
  } else {
    return {
      entries: entriesTotal,
      entriesType: 'total',
    };
  }
}

export default function counterReducer(state = {
  entries: entriesTotal,
  entriesType: 'total',
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
    case TOGGLE_ENTRIES:
      return {
        ...state,
        ...toggle(state.entriesType),
      };
    default:
      return state;
  }
}
