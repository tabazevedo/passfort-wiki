import get from 'lodash/fp/get';

export const currentPage = get('page');
export const documents = get(['documents', 'titles']);
