import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(thunkMiddleware, createLogger())
    applyMiddleware(thunkMiddleware),
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
