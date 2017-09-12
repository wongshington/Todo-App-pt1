import React from 'react';
import { Provider } from 'react-redux';
import App from './app';


//mostly boiler plate
//wrap the App in the Provider
const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
