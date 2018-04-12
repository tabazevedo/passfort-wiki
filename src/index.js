import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as StyletronEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import createHistory from 'history/createBrowserHistory';

import createStore from './redux/createStore';

import './style/global.css';
import Page from './components/Page';
import DocumentPage from './pages/Document';
import DocumentsPage from './pages/Documents';

const store = window.devToolsExtension
  ? createStore(createHistory(), window.devToolsExtension())
  : createStore(createHistory());

const Application = (
  <StoreProvider store={store}>
    <StyletronEngine value={new Styletron()}>
      <Page page="documents" component={DocumentsPage} />
      <Page page="document" component={DocumentPage} />
      <Page page="document-revision" component={DocumentPage} />
    </StyletronEngine>
  </StoreProvider>
)

ReactDOM.render(Application, document.getElementById('root'));
