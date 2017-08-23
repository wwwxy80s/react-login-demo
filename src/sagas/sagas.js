import { takeEvery, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER } from '../actions/login';
import { GET_CRAWLER, GET_TASK } from '../actions/home'
import { loginUserAsync } from '../sagas/login';
import { getCrawlerAsync, getTaskAsync } from '../sagas/home';

export default function* rootSaga() {
  yield [
    takeLatest(LOGIN_USER, loginUserAsync),
    takeEvery(GET_TASK, getTaskAsync),
    takeEvery(GET_CRAWLER, getCrawlerAsync)
  ]
}
