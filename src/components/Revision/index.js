import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import {
  documentRevision as selectRevision,
  documentRevisionData as selectRevisionData,
  documentTitle as selectDocumentTitle
} from '../../redux/selectors';

import { styled } from 'styletron-react';

const Content = styled('main', {
  backgroundColor: '#FFF',
  border: '1px dashed #444',
  padding: '10px',
  marginBottom: '10px',
  marginTop: '10px'
});

const Title = styled('h2', {
  fontWeight: 'bold',
  fontSize: '1.3em'
});

const Rev = styled('h4', {
  fontSize: '1.1em'
});

export function Revision({ revision, body, title }) {
  const md = body ? <ReactMarkdown source={body} /> : null;
  return (
    <div>
      <header>
        <Title>{title}</Title>
        <Rev>viewing revision: {revision}</Rev>
      </header>
      <Content>
        {md}
      </Content>
    </div>
  );
};

Revision.propTypes = {
  revision: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string
}

export const mapStateToProps = state => ({
  title: selectDocumentTitle(state),
  revision: selectRevision(state),
  body: selectRevisionData(state)
});

export default connect(mapStateToProps)(Revision);
