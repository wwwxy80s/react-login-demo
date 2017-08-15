import {GET_TASK, GET_TASK_SUCCESS, GET_CRAWLER, GET_RULE} from "../actions/home";

const initialState = {
    taskData: {
        allCount: 0,
        enabledCount: 0,
        executeCount: 0,
        sleepCount: 0,
    }
};

export const getTask = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_TASK:
            return state;
        case GET_TASK_SUCCESS:
            return ({
                    ...state,
                    ...action.taskData,
                }
            );
        default:
            return state;
    }
};
