import nock from 'nock';
import { FETCH_FAILED, fetchThunk, pending, success } from './index';
import { API_ENDPOINT } from '../../../config';
import url from 'url';

describe('actions/revision', () => {
  describe('fetch', () => {
    let api;

    beforeAll(() => {
      api = nock(API_ENDPOINT)
    });

    afterAll(() => {
      nock.cleanAll();
      nock.restore();
    });

    it('fetches with title and revision based on location state', async () => {
      const dispatch = jest.fn();
      const getState = () => ({
        location: {
          payload: {
            title: 'TITLE',
            revision: 'REVISION'
          }
        }
      });

      api.get('/page/TITLE/REVISION').reply(200, { data: 'body' });

      await fetchThunk(dispatch, getState);

      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0]).toEqual(pending());
      expect(dispatch.mock.calls[1][0]).toEqual(
        success({ document: { data: 'body' }, title: 'TITLE', revision: 'REVISION' })
      );

      api.done();
    });

    it('dispatches pending, then success on successful fetch', async () => {
      const dispatch = jest.fn();

      const getState = () => ({
        location: {
          payload: {
            title: '123',
            revision: 'latest'
          }
        }
      });

      api.get('/page/123/latest').reply(200, { data: 'body' });

      await fetchThunk(dispatch, getState);

      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0]).toEqual(pending());
      expect(dispatch.mock.calls[1][0]).toEqual(
        success({ document: { data: 'body' }, title: '123', revision: 'latest' })
      );

      api.done();
    });

    it('dispatches pending, then failed when an error occurs', async () => {
      const dispatch = jest.fn();

      const getState = () => ({
        location: {
          payload: {
            title: '123',
            revision: 'latest'
          }
        }
      });

      api.get('/page/123/latest').reply(500);

      await fetchThunk(dispatch, getState);

      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0]).toEqual(pending());
      expect(dispatch.mock.calls[1][0]).toHaveProperty('type', FETCH_FAILED);
      expect(dispatch.mock.calls[1][0]).toHaveProperty('error', true);
      expect(dispatch.mock.calls[1][0]).toHaveProperty('payload');

      api.done();
    });
  });
});
