import { fetch as fetchDocuments } from './redux/actions/documents';
import { fetch as fetchRevisions } from './redux/actions/revisions';
import { fetch as fetchCurrentRevision } from './redux/actions/revision';

const fetchDocumentData = async (dispatch, getState) => {
  await fetchRevisions()(dispatch, getState);
  return await fetchCurrentRevision()(dispatch, getState);
}

export default {
  'route:documents': {
    path: '/(documents)?',
    thunk: fetchDocuments()
  },
  'route:document': {
    path: '/documents/:title',
    thunk: fetchDocumentData
  },
  'route:document-revision': {
    path: '/documents/:title/:revision',
    thunk: fetchDocumentData
  }
};
