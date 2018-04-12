import nock from 'nock';
import { FETCH_FAILED, fetchThunk, pending, success } from './index';
import { API_ENDPOINT } from '../../../config';
import url from 'url';

describe('actions/documents', () => {
  describe('fetch', () => {
    let api;

    beforeAll(() => {
      api = nock(API_ENDPOINT)
    });

    afterAll(() => {
      nock.cleanAll();
      nock.restore();
    });

    it('dispatches pending, then success on successful fetch', async () => {
      const dispatch = jest.fn();
      api.get('/pages').reply(200, ['data']);

      await fetchThunk(dispatch);

      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0]).toEqual(pending());
      expect(dispatch.mock.calls[1][0]).toEqual(success(['data']));

      api.done();
    });

    it('dispatches pending, then failed when an error occurs', async () => {
      const dispatch = jest.fn();
      api.get('/pages').reply(500);

      await fetchThunk(dispatch);

      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0]).toEqual(pending());
      expect(dispatch.mock.calls[1][0]).toHaveProperty('type', FETCH_FAILED);
      expect(dispatch.mock.calls[1][0]).toHaveProperty('error', true);
      expect(dispatch.mock.calls[1][0]).toHaveProperty('payload');

      api.done();
    });
  });
});
