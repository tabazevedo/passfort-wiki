import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

export const currentPage = get('page');
export const documents = get(['documents', 'titles']);

export const documentTitle = get(['location', 'payload', 'title']);
export const documentRevision = getOr('latest', ['location', 'payload', 'revision']);

export const documentRevisions = state => {
  const title = documentTitle(state);
  return get(['revisionsByDocument', title], state);
}
