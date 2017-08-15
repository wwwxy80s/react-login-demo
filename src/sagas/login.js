import {select, put, call} from 'redux-saga/effects';
import md5 from 'md5';
import {push} from 'react-router-redux';
import {history} from "../Routes";

import {getUserData} from "./selectors";
import {getSalt, login} from "./api";
import {loginFailureAction, loginSuccessAction} from "../actions/login";
import store from "../Store";

export function* loginUserAsync() {
    const state = yield select(state => state);
    // console.log(state);
    const user = yield select(getUserData);
    // console.log(user);
    // console.log(user.password);
    // console.log(md5(user.password));
    const salt = yield call(getSalt.bind(this, user.username));
    // console.log(salt);

    if (salt.status !== 200) {
        yield put(loginFailureAction(salt))
    } else {
        user.password = user.password + salt.data.salt;
        user.password = md5(user.password);
        // console.log(user);
        const data = yield call(login.bind(this, user));
        // console.log(data);
        if (data.status === 200) {
            yield put(loginSuccessAction(data));
            // yield put(push('/home'));
            // {
            //     console.log('push home start');
            //     history.push('/home');
            //     // store.dispatch(push('/home'));
            //     console.log('push home end');
            // }

        } else {
            yield put(loginFailureAction(data));
        }
    }
}
