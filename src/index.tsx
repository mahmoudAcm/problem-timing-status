import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { ContextProvider } from './context';
import { App } from './components';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
