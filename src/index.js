import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as StyletronEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import createHistory from 'history/createBrowserHistory';

import './style/global.css';
import createStore from './redux/createStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = window.devToolsExtension
  ? createStore(createHistory(), window.devToolsExtension())
  : createStore(createHistory());

const Application = (
  <StoreProvider store={store}>
    <StyletronEngine value={new Styletron()}>
      <App />
    </StyletronEngine>
  </StoreProvider>
)

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
