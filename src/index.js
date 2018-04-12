import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import './style/global.css';
import createStore from './redux/createStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = window.devToolsExtension
  ? createStore(window.devToolsExtension())
  : createStore();

const Application = (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
)

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
