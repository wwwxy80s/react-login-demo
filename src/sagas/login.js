import {select, put, call} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import md5 from 'md5';

import {getUserData} from "./selectors";
import {getSalt, login} from "./api";
import {loginFailureAction, loginSuccessAction} from "../actions/login";

export function* loginUserAsync() {
    const user = yield select(getUserData);
    const salt = yield call(getSalt.bind(this, user.username));
    if (salt.status !== 200) {
        yield put(loginFailureAction(salt))
    } else {
        user.password = user.password + salt.data.salt;
        user.password = md5(user.password);
        const data = yield call(login.bind(this, user));
        if (data.status === 200) {
            yield put(loginSuccessAction(data));
            yield put(push('/home'));
        } else {
            yield put(loginFailureAction(data));
        }
    }
}