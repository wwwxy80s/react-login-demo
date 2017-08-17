import React from 'react';
import {Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import store, {history} from "./Store";
import Login from './containers/login';
import Home from './containers/home';

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Routes;
