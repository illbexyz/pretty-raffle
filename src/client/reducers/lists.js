import {
  FETCH_LISTS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  BEGIN_CREATE,
  STOP_CREATE,
} from '../actions/lists.js';

export default function listsReducer(state = {
  isFetching: false,
  isCreateOpen: false,
  lists: null,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        lists: action.lists,
        isFetching: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case BEGIN_CREATE:
      return {
        ...state,
        isCreateOpen: true,
      };
    case STOP_CREATE:
      return {
        ...state,
        isCreateOpen: false,
      };
    default:
      return state;
  }
}
