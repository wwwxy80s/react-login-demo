import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';


import store from './Store';
import Login from './containers/login';
import Home from './containers/test';

export const history = createBrowserHistory();

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Routes;
