import { call, put } from 'redux-saga/effects';
import { getCrawler, getTask } from './api';
import { getCrawlerSuccess, getTaskSuccess } from '../actions/home';

export function* getTaskAsync(action) {
  const { apiType } = action;
  const taskData = yield call(getTask, apiType);
  if ( taskData.status === 200 ) {
    yield put(getTaskSuccess(taskData.data, apiType));
  }
}

export function* getCrawlerAsync(action) {
  const { pageData: { page, pageSize, apiType } } = action;
  const crawlerData = yield call(getCrawler, page, pageSize, apiType);
  if ( crawlerData.status === 200 ) {
    yield put(getCrawlerSuccess(crawlerData.data, apiType));
  }
}