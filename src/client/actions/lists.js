import firebase from 'firebase';

import { changeList } from './raffle';

export const FETCH_LISTS = 'FETCH_LISTS';

function fetch() {
  return {
    type: FETCH_LISTS,
  };
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

function fetchSuccess(lists) {
  return {
    type: FETCH_SUCCESS,
    lists,
  };
}

export const FETCH_FAILURE = 'FETCH_FAILURE';

function fetchFailure() {
  return {
    type: FETCH_FAILURE,
  };
}

export function fetchLists() {
  return (dispatch, getState) => {
    dispatch(fetch());
    const uid = getState().firebase.user.uid;
    firebase.database()
      .ref(`users/${uid}/lists`)
      .on('value', snapshot => {
        const listIds = [];
        snapshot.forEach(value => {
          listIds.push(value.val());
        });
        const promises = [];
        listIds.forEach(listId => {
          const promise = firebase.database()
            .ref(`lists/${listId}`)
            .once('value');
          promises.push(promise);
        });
        Promise.all(promises).then(values => {
          const lists = values.map(value => value.val());
          dispatch(fetchSuccess(lists));
          if (lists.length) dispatch(changeList(0));
        });
      });
  };
}

export const BEGIN_CREATE = 'BEGIN_CREATE';

export function beginCreate() {
  return {
    type: BEGIN_CREATE,
  };
}

export const STOP_CREATE = 'STOP_CREATE';

export function stopCreate() {
  return {
    type: STOP_CREATE,
  };
}

export const SEND_CREATE = 'SEND_CREATE';

function sendCreate() {
  return {
    type: SEND_CREATE,
  };
}

export function createList(title, partecipants) {
  return (dispatch, getState) => {
    dispatch(sendCreate());
    const uid = getState().firebase.user.uid;
    const newListRef = firebase.database().ref('lists').push({
      title,
      partecipants,
    });
    firebase.database().ref(`users/${uid}/lists`).push(newListRef.key);
  };
}
