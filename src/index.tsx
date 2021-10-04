import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxProvider from 'store/ReduxProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
