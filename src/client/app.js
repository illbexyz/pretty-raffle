import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import createStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

const store = createStore();

injectTapEventPlugin();

const root = document.getElementById('app');

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, root);
