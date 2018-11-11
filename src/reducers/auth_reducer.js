import { AUTH_USER, AUTH_ERR } from '../actions/types';

const initialState = {
  token: '',
  error: ''
};

export default (state = initialState, { type, token, error }) => {
  switch (type) {
    case AUTH_USER:
      return { ...state, token };
    case AUTH_ERR:
      return { ...state, error: error };
    default:
      return state;
  }
};
