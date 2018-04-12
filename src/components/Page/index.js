import React from 'react';
import { connect } from 'react-redux';
import { currentPage as selectCurrentPage } from '../../redux/selectors';

export function Page({ page, currentPage, component }) {
  if (page === currentPage)
    return React.createElement(component);

  return null;
}

export const mapStateToProps = state => ({
  currentPage: selectCurrentPage(state)
});

export default connect(mapStateToProps)(Page);
