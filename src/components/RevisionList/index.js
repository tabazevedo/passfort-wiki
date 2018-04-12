import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';

import {
  documentRevisions as selectRevisions,
  documentTitle as selectDocumentTitle
} from '../../redux/selectors';

export function RevisionList({ title, revisions }) {
  const revisionLinks = revisions.map(revision => (
    <li key={revision}>
      <Link to={{ type: 'route:document-revision', payload: { title, revision }}}>
        {revision}
      </Link>
    </li>
  ));

  return (
    <ul>
      {revisionLinks}
    </ul>
  );
};

RevisionList.defaultProps = {
  revisions: []
}

RevisionList.propTypes = {
  revisions: PropTypes.arrayOf(PropTypes.number)
}

export const mapStateToProps = state => ({
  title: selectDocumentTitle(state),
  revisions: selectRevisions(state)
});

export default connect(mapStateToProps)(RevisionList);
