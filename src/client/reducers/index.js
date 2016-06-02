import { combineReducers } from 'redux';

import raffle from './raffle';
import drawer from './drawer';
import windowR from './window';
import firebase from './firebase';
import lists from './lists';

const rootReducer = combineReducers({
  raffle,
  drawer,
  window: windowR,
  firebase,
  lists,
});

export default rootReducer;
