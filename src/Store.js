import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import authReducer from './reducers/auth_reducer';

export default function Store({ children }) {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      form: formReducer
    }),
    { auth: { token: localStorage.getItem('token') } },
    applyMiddleware(reduxThunk)
  );
  return <Provider store={store}>{children}</Provider>;
}
