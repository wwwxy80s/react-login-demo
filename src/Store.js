import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import rootSaga from './sagas/sagas';
import { login } from './reducers/login';
import { home } from './reducers/home';

export const history = createHistory();

const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  login,
  home,
  router: routerReducer
});

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, middleware),
);

const store = createStore(
  rootReducer,
  enhancer
);

sagaMiddleware.run(rootSaga);

export default store;
