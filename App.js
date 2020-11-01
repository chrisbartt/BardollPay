import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import SlideImageReducer from './src/store/reducer/slideImage';
import AuthReducer from './src/store/reducer/auth';
import HomeDataReducer from './src/store/reducer/homeData';

import RootNavigator from './src/router/router';

const rootReducer = combineReducers({
  SlideImages: SlideImageReducer,
  Auth: AuthReducer,
  HomeData: HomeDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
