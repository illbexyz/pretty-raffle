import { combineReducers } from 'redux';

import raffle from './raffle';

const rootReducer = combineReducers({
  raffle,
});

export default rootReducer;
