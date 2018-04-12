import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import {
  documentRevision as selectRevision,
  documentRevisionData as selectRevisionData
} from '../../redux/selectors';

export function Revision({ revision, body }) {
  return (
    <div>
      <h2>viewing revision: {revision}</h2>
      <main>
        <ReactMarkdown source={body} />
      </main>
    </div>
  );
};

Revision.propTypes = {
  revision: PropTypes.node.isRequired,
  body: PropTypes.string.isRequired
}

export const mapStateToProps = state => ({
  revision: selectRevision(state),
  body: selectRevisionData(state)
});

export default connect(mapStateToProps)(Revision);
