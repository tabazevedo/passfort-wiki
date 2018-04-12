import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';

import { documents as selectDocuments } from '../../redux/selectors';

export function DocumentList({ documents }) {
  const docLinks = documents.map(title => (
    <li key={title}>
      <Link to={{ type: 'route:document', payload: { title }}}>
        {title}
      </Link>
    </li>
  ));

  return (
    <ul>
      {docLinks}
    </ul>
  );
};

DocumentList.defaultProps = {
  documents: []
}

DocumentList.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.string)
}

export const mapStateToProps = state => ({
  documents: selectDocuments(state)
});

export default connect(mapStateToProps)(DocumentList);
