import fetch from 'universal-fetch';
import url from 'url-join';

import { API_ENDPOINT } from '../config';
import { RequestError, ResponseError } from './errors';

// TODO: Move this endpoint configuration to a nicer place?

const DOCUMENTS = url(API_ENDPOINT, 'pages');
const DOCUMENT = url(API_ENDPOINT, 'page');

export const request = async (endpoint) => {
  let response;

  try {
    response = await fetch(endpoint);
  } catch (e) {
    throw new RequestError(e.message);
  }

  if (!response.ok) throw new ResponseError(response);

  return await response.json();
}

export const documents = () => request(DOCUMENTS);
export const revisions = (docId) => request(url(DOCUMENT, String(docId)));

export const document = (docId, revision) =>
  request(url(DOCUMENT, String(docId), String(revision)));
