import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { StateProvider, Timer } from './components';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Timer />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
