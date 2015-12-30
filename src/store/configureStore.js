import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import rootReducer from '../reducers';
import middlewares from '../middleware';

// applyMiddleware supercharges createStore with middleware:
let modifiedStoreCreator = applyMiddleware(...middlewares)(createStore);

if (__DEVELOPMENT__) {
  modifiedStoreCreator = compose(
    // Enables your middleware:
    applyMiddleware(...middlewares),
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
}

export function renderDevTools(store) {
  if (__DEVELOPMENT__) {
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}

export function configureStore(initialState) {
  return modifiedStoreCreator(enableBatching(rootReducer), initialState);
}
