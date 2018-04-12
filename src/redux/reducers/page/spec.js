import reducer from './index';
import routes from '../../../routes';

describe('reducers/page', () => {
  it('handles all described routes', () => {
    // if we forgot to handle a new route, this should pick it up.

    Object.keys(routes).forEach(route => {
      const page = 'initial';
      const action = { type: route };
      expect(reducer(page, action)).not.toEqual(page);
    });
  });

  it('does not change page upon unhandled action', () => {
    const page = 'initial';
    const action = { type: 'user:login' };
    expect(reducer(page, action)).toEqual(page);
  });
});
