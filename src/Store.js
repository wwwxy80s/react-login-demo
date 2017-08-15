import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {login} from './reducers/login';
import {getTask} from './reducers/home';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import {history} from "./Routes";
import rootSaga from './sagas/sagas';
import DevTools from './utils/Devtools';

const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login,
    getTask,
    router: routerReducer
});

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(sagaMiddleware, middleware),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

const store = createStore(
    rootReducer,
    enhancer
);

// console.log(store);
sagaMiddleware.run(rootSaga);

export default store;
