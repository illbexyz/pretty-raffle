import firebase from 'firebase';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL } from '../config/firebase.js';

export const INIT_FIREBASE = 'INIT_FIREBASE';

function initialize() {
  return {
    type: INIT_FIREBASE,
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
}

export function initializeFirebase() {
  return (dispatch, getState) => {
    if (!getState().firebase.isConnected) {
      const config = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
      };
      firebase.initializeApp(config);
      dispatch(initialize());
    }
  };
}

export const ANONYMOUS_SIGNIN = 'ANONYMOUS_SIGNIN';

function anonymous() {
  return {
    type: ANONYMOUS_SIGNIN,
  };
}

export const ANONYMOUS_SIGNIN_SUCCESS = 'ANONYMOUS_SIGNIN_SUCCESS';

function anonymousSuccess(user) {
  return {
    type: ANONYMOUS_SIGNIN_SUCCESS,
    user,
  };
}

export const ANONYMOUS_SIGNIN_FAILURE = 'ANONYMOUS_SIGNIN_FAILURE';

function anonymousFailure(error) {
  return {
    type: ANONYMOUS_SIGNIN_FAILURE,
    error,
  };
}

export function anonymousLogin() {
  return (dispatch) => {
    dispatch(anonymous());
    firebase.auth().signInAnonymously().catch((error) => {
      dispatch(anonymousFailure(error));
    });
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      unsub();
      if (user) {
        dispatch(anonymousSuccess(user));
      } else {
        // User is signed out.
        // ...
      }
    });
  };
}

export const GOOGLE_SIGNIN = 'GOOGLE_SIGNIN';

function google() {
  return {
    type: GOOGLE_SIGNIN,
  };
}

export const GOOGLE_SIGNIN_SUCCESS = 'GOOGLE_SIGNIN_SUCCESS';

function googleSuccess(user) {
  return {
    type: GOOGLE_SIGNIN_SUCCESS,
    user,
  };
}

export const GOOGLE_SIGNIN_FAILURE = 'GOOGLE_SIGNIN_FAILURE';

function googleFailure(error) {
  return {
    type: GOOGLE_SIGNIN_FAILURE,
    error,
  };
}

export function googleLogin() {
  return (dispatch, getState) => {
    dispatch(google());
    firebase.auth().signInWithPopup(getState().firebase.googleProvider)
    .then(result => {
      localStorage.setItem('googleToken', result.credential.idToken);
      const user = result.user;
      dispatch(googleSuccess(user));
    }).catch(error => {
      dispatch(googleFailure(error));
    });
  };
}

function restoreSession(idToken) {
  return dispatch => {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
    firebase.auth().signInWithCredential(credential)
      .then(user => {
        dispatch(googleSuccess(user));
      })
      .catch(error => {
        dispatch(googleFailure(error));
        dispatch(anonymousLogin());
        localStorage.removeItem('googleToken');
      });
  };
}

function checkSession(user) {
  if (!user) {
    const googleToken = localStorage.getItem('googleToken');
    if (googleToken) {
      return true;
    }
    return false;
  }
  return false;
}

export function restoreSessionOrGoAnonymous() {
  return (dispatch, getState) => {
    const user = getState().firebase.user;
    if (checkSession(user)) {
      dispatch(restoreSession(localStorage.getItem('googleToken')));
    } else {
      dispatch(anonymousLogin());
    }
  };
}
