import React from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

import {name as appName} from './app.json';
import App from './App';
import galleryReducer from './src/store/reducers/galleryReducer';
import {watchGallery} from './src/store/sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(galleryReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchGallery);

const app = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => app);
