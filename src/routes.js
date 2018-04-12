import { fetch as fetchDocuments } from './redux/actions/documents';
import { fetch as fetchRevisions } from './redux/actions/revisions';

export default {
  'route:documents': {
    path: '/(documents)?',
    thunk: fetchDocuments()
  },
  'route:document': {
    path: '/documents/:title',
    thunk: fetchRevisions()
  },
  'route:document-revision': {
    path: '/documents/:title/:revision'
  }
};
