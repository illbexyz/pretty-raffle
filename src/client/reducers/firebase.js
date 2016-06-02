import {
  INIT_FIREBASE,
  GOOGLE_SIGNIN,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAILURE,
  ANONYMOUS_SIGNIN,
  ANONYMOUS_SIGNIN_SUCCESS,
  ANONYMOUS_SIGNIN_FAILURE,
} from '../actions/firebase.js';

export default function firebaseReducer(state = {
  isConnected: false,
  isAuthenticating: false,
  googleProvider: null,
}, action) {
  switch (action.type) {
    case INIT_FIREBASE:
      return {
        ...state,
        isConnected: true,
        googleProvider: action.googleProvider,
      };
    case ANONYMOUS_SIGNIN:
    case GOOGLE_SIGNIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case ANONYMOUS_SIGNIN_SUCCESS:
    case GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticating: false,
      };
    case ANONYMOUS_SIGNIN_FAILURE:
    case GOOGLE_SIGNIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isAuthenticating: false,
      };
    default:
      return state;
  }
}
