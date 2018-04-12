import { NOT_FOUND } from 'redux-first-router';

// map of route action:page name we set in state

const pageMap = {
  'route:documents': 'documents',
  'route:document': 'document',
  'route:document-revision': 'document',
  [NOT_FOUND]: 'documents'
}

export default (state = null, action) => {
  return pageMap[action.type] || state;
};
