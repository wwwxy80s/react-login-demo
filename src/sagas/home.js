import {put, call} from 'redux-saga/effects';
import {getTask, getCrawlerTask} from "./api";
import {getTaskSuccess, getCrawlerTaskSuccess} from "../actions/home";

export function* getTaskAsync() {
    //原始数据
    const task = yield call(getTask);
    // console.log(task);
    if (task.status === 200) {
        //具体需要用的数据
        yield put(getTaskSuccess(task.data));
    }
}

export function* getCrawlerTaskAsync(action) {
    // console.log(action);
    const {pageData: {page, pageSize}} = action;
    //原始数据
    const crawlerTask = yield call(getCrawlerTask, [page, pageSize]);
    console.log(crawlerTask);
    if (crawlerTask.status === 200) {
        //crawlerTask.data 具体需要用的数据
        yield put(getCrawlerTaskSuccess(crawlerTask.data));
    }
}