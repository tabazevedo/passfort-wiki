import { currentPage, documents, documentTitle, documentRevision } from './index';

describe('selectors/currentPage', () => {
  it('returns current page from state', () => {
    const state = {
      page: 'document'
    };

    const expected = 'document';

    expect(currentPage(state)).toEqual(expected);
  });
});

describe('selectors/documents', () => {
  it('returns document titles from state', () => {
    const state = {
      documents: {
        titles: ['a', 'document']
      }
    };

    const expected = ['a', 'document'];

    expect(documents(state)).toEqual(expected);
  });
});

describe('selectors/documentTitle', () => {
  it('returns document title from location state', () => {
    const state = {
      location: {
        payload: {
          title: 'doc'
        }
      }
    };

    const expected = 'doc';

    expect(documentTitle(state)).toEqual(expected);
  });
});

describe('selectors/documentRevision', () => {
  it('returns document revision from location state', () => {
    const state = {
      location: {
        payload: {
          revision: '123'
        }
      }
    };

    const expected = '123';

    expect(documentRevision(state)).toEqual(expected);
  });

  it('returns latest if revision not present', () => {
    const state = {};
    const expected = 'latest';

    expect(documentRevision(state)).toEqual(expected);
  });
});
