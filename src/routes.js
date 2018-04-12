export default {
  'route:documents': {
    path: '/(documents)?'
  },
  'route:document': {
    path: '/documents/:id(/latest)?'
  },
  'route:document-revision': {
    path: '/documents/:id/:revision'
  }
};
