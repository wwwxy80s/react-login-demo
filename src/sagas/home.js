import {select, put, call} from 'redux-saga/effects';
import {getTask} from "./api";
import {getTaskSuccess} from "../actions/home";

export function* getTaskAsync() {
    const task = yield call(getTask);
    console.log(task);
    if (task.status===200){
        put(getTaskSuccess(task));
    }
}