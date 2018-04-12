import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import reducers from './reducers';
import routes from '../routes';

export default (history, ...additionalMiddleware) => {
  const {
    reducer: routingReducer,
    middleware: routingMiddleware,
    enhancer: routingEnhancer
  } = connectRoutes(history, routes);

  const rootReducer = combineReducers({
    location: routingReducer,
    ...reducers
  });

  return createStore(
    rootReducer,
    compose(
      routingEnhancer,
      applyMiddleware(routingMiddleware),
      ...additionalMiddleware
    )
  )
};
