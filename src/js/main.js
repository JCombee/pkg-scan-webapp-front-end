import 'material-design-lite';
import 'material-design-lite/material.min.css';
import 'material-design-lite/dist/material.blue_grey-indigo.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import '../scss/main.scss';

import configureStore from './redux/configureStore';
import Routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>
, document.getElementById('app'));
