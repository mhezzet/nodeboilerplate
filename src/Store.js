import React from 'react';
import { Provider } from 'react-redux';

export default function Store({ children, initialState = {} }) {
  return <Provider>{children}</Provider>;
}
