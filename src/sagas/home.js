import {put, call} from 'redux-saga/effects';
import {getTask, getCrawler} from "./api";
import {getTaskSuccess, getCrawlerSuccess} from "../actions/home";

export function* getTaskAsync(action) {
    // console.log(action);
    const {apiType} = action;
    // console.log(apiType);
    //原始数据
    const taskData = yield call(getTask, apiType);
    console.log(taskData);
    if (taskData.status === 200) {
        //具体需要用的数据
        yield put(getTaskSuccess(taskData.data, apiType));
    }
}

export function* getCrawlerAsync(action) {
    // console.log(action);
    const {pageData: {page, pageSize, apiType}} = action;
    //原始数据
    const crawlerData = yield call(getCrawler, page, pageSize, apiType);
    console.log(crawlerData);
    if (crawlerData.status === 200) {
        //crawlerTask.data 具体需要用的数据
        yield put(getCrawlerSuccess(crawlerData.data, apiType));
    }
}