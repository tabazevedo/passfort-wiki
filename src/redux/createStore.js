import { compose, createStore } from 'redux';

const reducer = s => s;

export default (...additionalMiddleware) => {
  return createStore(
    reducer,
    compose(...additionalMiddleware)
  )
};
