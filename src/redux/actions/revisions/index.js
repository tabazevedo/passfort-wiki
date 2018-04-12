import createAction from '../createAction';
import { revisions as fetchRevisions } from '../../../requests';

import {
  documentTitle as selectDocumentTitle
} from '../../selectors';

// Action type constants

export const FETCH_FAILED = 'fetch-revisions:failed';
export const FETCH_PENDING = 'fetch-revisions:pending';
export const FETCH_SUCCESS = 'fetch-revisions:success';

// Data fetching thunk, seperated for testability

export const fetchThunk = async (dispatch, getState) => {
  dispatch(pending());

  try {
    const state = getState();
    const title = selectDocumentTitle(state);

    const data = await fetchRevisions(title);
    dispatch(success({ data, title }));
  } catch(e) {
    dispatch(failed(e));
  }
}

// Action creators

export const failed = (error) => createAction(FETCH_FAILED, error, true);
export const pending = () => createAction(FETCH_PENDING);
export const success = (data) => createAction(FETCH_SUCCESS, data);
export const fetch = () => fetchThunk;
