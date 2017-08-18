import {takeLatest, takeEvery} from 'redux-saga/effects';
import {LOGIN_USER} from "../actions/login";
import {GET_TASK, GET_CRAWLER} from "../actions/home"
import {loginUserAsync} from '../sagas/login';
import {getTaskAsync, getCrawlerAsync} from '../sagas/home';

export default function* rootSaga() {
    yield [
        takeLatest(LOGIN_USER, loginUserAsync),
        takeEvery(GET_TASK, getTaskAsync),
        takeEvery(GET_CRAWLER, getCrawlerAsync)
    ]
}
