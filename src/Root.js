import React from 'react';
import { Provider } from 'react-redux';

import App from './modules/App/App';
import configureStore from './store';

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
)
