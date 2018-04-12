import { fetch as fetchDocuments } from './redux/actions/documents';

export default {
  'route:documents': {
    path: '/(documents)?',
    thunk: fetchDocuments()
  },
  'route:document': {
    path: '/documents/:name'
  },
  'route:document-revision': {
    path: '/documents/:name/:revision'
  }
};
