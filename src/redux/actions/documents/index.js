import createAction from '../createAction';
import { documents as fetchDocuments } from '../../../requests';

// Action type constants

export const FETCH_FAILED = 'fetch-documents:failed';
export const FETCH_PENDING = 'fetch-documents:pending';
export const FETCH_SUCCESS = 'fetch-documents:success';

// Data fetching thunk, seperated for testability

export const fetchThunk = async (dispatch) => {
  dispatch(pending());

  try {
    const documents = await fetchDocuments();
    dispatch(success(documents));
  } catch(e) {
    dispatch(failed(e));
  }
}

// Action creators

export const failed = (error) => createAction(FETCH_FAILED, error, true);
export const pending = () => createAction(FETCH_PENDING);
export const success = (data) => createAction(FETCH_SUCCESS, data);
export const fetch = () => fetchThunk;
