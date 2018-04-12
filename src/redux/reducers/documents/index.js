import { FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from '../../actions/documents';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      return action.payload;

    // TODO: Do something with failure/pending states?
    case FETCH_FAILED:
    case FETCH_PENDING:
    default:
      return state;
  }
}
