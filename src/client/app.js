import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import NewList from './components/NewList';

import AppContainer from './containers/AppContainer';
import ListsRouted from './containers/ListsRouted';
import HomeContainer from './containers/HomeContainer';

import createStore from './store/configureStore';

const store = createStore();

injectTapEventPlugin();

const root = document.getElementById('app');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => {
      console.log('Service worker registered');
    })
    .catch(error => {
      console.error('Error registering service worker: ', error);
    });
}

ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="lists" component={ListsRouted}>
          <Route path="create" component={NewList} />
        </Route>
        <Route path="*" component={HomeContainer} />
      </Route>
    </Router>
  </Provider>
), root);
