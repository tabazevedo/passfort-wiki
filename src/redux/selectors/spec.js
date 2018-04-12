import { currentPage, documents } from './index';

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
