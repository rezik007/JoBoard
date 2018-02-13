import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';

const storeInstance = Store();

ReactDOM.render(
  <Provider store={ storeInstance }>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
