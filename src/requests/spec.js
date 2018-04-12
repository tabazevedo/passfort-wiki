import { request, document } from './index';
import { RequestError, ResponseError } from './errors';
import { API_ENDPOINT } from '../config';
import nock from 'nock';
import url from 'url-join';

describe('requests', () => {
  let api;

  beforeAll(() => {
    api = nock(API_ENDPOINT)
  });

  afterAll(() => {
    nock.cleanAll();
    nock.restore();
  });

  describe('request handler', () => {
    it('returns parsed json data when successful', async () => {
      api.get('/page').reply(200, { json: true });
      const json = await request(url(API_ENDPOINT, '/page'));

      expect(json).toEqual({ json: true });
      api.done();
    });

    it('throws a RequestError when an internal error occurs', async () => {
      api.get('/page').replyWithError('DHCP lookup failed');

      try {
        const json = await request(url(API_ENDPOINT, '/page'));
      } catch(e) {
        expect(e).toBeInstanceOf(RequestError);
      }

      api.done();
    });

    it('throws a ResponseError when server responds with an error state', async () => {
      api.get('/page').reply(500);

      try {
        const json = await request(url(API_ENDPOINT, '/page'));
      } catch(e) {
        expect(e).toBeInstanceOf(ResponseError);
      }

      api.done();
    });
  });

  describe('fetch document request', () => {
    it('fetches provided revision', async () => {
      api.get('/page/doc/123456').reply(200, { document: true });
      const json = await document('doc', 123456);

      expect(json).toEqual({ document: true });
      api.done();
    });
  });
});
