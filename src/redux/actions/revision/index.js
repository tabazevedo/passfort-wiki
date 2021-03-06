import createAction from '../createAction';
import { document as fetchDocument } from '../../../requests';

import {
  documentTitle as selectDocumentTitle,
  documentRevision as selectDocumentRevision
} from '../../selectors';

// Action type constants

export const FETCH_FAILED = 'fetch-revision:failed';
export const FETCH_PENDING = 'fetch-revision:pending';
export const FETCH_SUCCESS = 'fetch-revision:success';

// Data fetching thunk, seperated for testability

export const fetchThunk = async (dispatch, getState) => {
  dispatch(pending());

  try {
    const state = getState();
    const title = selectDocumentTitle(state);
    const revision = selectDocumentRevision(state);

    const doc = await fetchDocument(title, revision);
    dispatch(success({ document: doc.data, title, revision }));
  } catch(e) {
    dispatch(failed(e));
  }
}

// Action creators

export const failed = (error) => createAction(FETCH_FAILED, error, true);
export const pending = () => createAction(FETCH_PENDING);
export const success = (data) => createAction(FETCH_SUCCESS, data);
export const fetch = () => fetchThunk;
