import { FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from '../../actions/revision';
import set from 'lodash/fp/set'; // non-mutative set

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      const key = action.payload.title;
      const rev = action.payload.revision;
      return set([key, rev], action.payload.document, state);

    // TODO: Do something with failure/pending states?
    case FETCH_FAILED:
    case FETCH_PENDING:
    default:
      return state;
  }
}
