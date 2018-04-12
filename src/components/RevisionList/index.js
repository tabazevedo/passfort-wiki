import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

import {
  documentRevisions as selectRevisions,
  documentTitle as selectDocumentTitle
} from '../../redux/selectors';

const ListHeader = styled('span', {
  fontWeight: 'bold'
});

export function RevisionList({ title, revisions }) {
  const revisionLinks = revisions.map(revision => (
    <li key={revision}>
      <Link to={{ type: 'route:document-revision', payload: { title, revision }}}>
        {revision}
      </Link>
    </li>
  ));

  return (
    <div>
      <ListHeader>available revisions:</ListHeader>
      <ul>
        {revisionLinks}
      </ul>
    </div>
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
