import {GET_TASK, GET_TASK_SUCCESS, GET_CRAWLER_TASK,GET_CRAWLER_TASK_SUCCESS, GET_RULE} from "../actions/home";

const initialState = {
    taskData: {
        // allCount: 0,
        // enabledCount: 0,
        // executeCount: 0,
        // sleepCount: 0,
    }
    // taskData:null
};

export const getHome = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_TASK:
            return state;
        case GET_TASK_SUCCESS:
            return ({
                    ...state,
                    taskData:{...action.taskData},
                }
            );

        case GET_CRAWLER_TASK_SUCCESS:
            return ({
                    ...state,
                    crawlerTaskData:{...action.crawlerTaskData},
                }
            );
        default:
            return state;
    }
};
