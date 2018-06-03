import * as React from 'react';

import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import AppRoutes from './routes';

import { store } from './store'


ReactDOM.render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>,
  document.getElementById('root') as HTMLElement
)
