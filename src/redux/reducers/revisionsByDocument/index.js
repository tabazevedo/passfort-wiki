import { FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from '../../actions/revisions';
import set from 'lodash/fp/set'; // non-mutative set

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      const key = action.payload.title;
      return set(key, action.payload.data.revisions, state);

    // TODO: Do something with failure/pending states?
    case FETCH_FAILED:
    case FETCH_PENDING:
    default:
      return state;
  }
}
