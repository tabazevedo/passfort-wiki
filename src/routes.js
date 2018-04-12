export default {
  'route:documents': {
    path: '/(documents)?'
  },
  'route:document': {
    path: '/documents/:name'
  },
  'route:document-revision': {
    path: '/documents/:name/:revision'
  }
};
