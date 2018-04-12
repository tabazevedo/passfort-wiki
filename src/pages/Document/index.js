import React from 'react';
import App from '../../components/App';
import Revision from '../../components/Revision';
import RevisionList from '../../components/RevisionList';

function Document() {
  return (
    <App>
      <Revision />
      <RevisionList />
    </App>
  )
}

export default Document;
