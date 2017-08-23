import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import md5 from 'md5';

import { getSalt, login } from './api';
import { loginFailureAction, loginSuccessAction } from '../actions/login';

export function* loginUserAsync(action) {
  const { user } = action;
  const salt = yield call(getSalt, user.username);
  if ( salt.status !== 200 ) {
    yield put(loginFailureAction(salt));
  } else {
    user.password = user.password + salt.data.salt;
    user.password = md5(user.password);
    const data = yield call(login, user);
    if ( data.status === 200 ) {
      yield put(loginSuccessAction(data));
      yield put(push('/home'));
    } else {
      yield put(loginFailureAction(data));
    }
  }
}