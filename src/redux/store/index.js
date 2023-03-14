import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

// const composeEnhancers =
//    (typeof window !== 'undefined' &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//    compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk)),
//  );

//  const store = createStore(
//    rootReducer,
//    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()),
// );
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
export default store;