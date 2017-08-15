import {takeLatest, takeEvery} from 'redux-saga/effects';
import {LOGIN_USER} from "../actions/login";
import {GET_TASK} from "../actions/home"
import {loginUserAsync} from '../sagas/login';
import {getTaskAsync} from '../sagas/home';

export default function* rootSaga() {
    yield [
        takeLatest(LOGIN_USER, loginUserAsync),
        takeEvery(GET_TASK, getTaskAsync),
    ]
}
