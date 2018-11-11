// import { AUTH_USER } from './types';
import axios from 'axios';
import { AUTH_USER, AUTH_ERR, SIGN_OUT } from '../actions/types';

export const signup = (payload, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3333/api/users',
      payload
    );
    const token = response.headers['x-auth-token'];
    dispatch({
      type: AUTH_USER,
      token
    });
    dispatch({
      type: AUTH_ERR,
      error: ''
    });

    localStorage.setItem('token', token);
    callback();
  } catch (ex) {
    dispatch({
      type: AUTH_ERR,
      error: ex.response.data
    });
  }
};
export const signin = (payload, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3333/api/auth',
      payload
    );

    const token = response.data;
    dispatch({
      type: AUTH_USER,
      token
    });
    dispatch({
      type: AUTH_ERR,
      error: ''
    });

    localStorage.setItem('token', token);
    callback();
  } catch (ex) {
    dispatch({
      type: AUTH_ERR,
      error: ex.response.data
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    token: ''
  };
};
