import { currentPage } from './index';

describe('selectors/currentPage', () => {
  it('returns current page from state', () => {
    const state = {
      page: 'document'
    };

    const expected = 'document';

    expect(currentPage(state)).toEqual(expected);
  });
});
