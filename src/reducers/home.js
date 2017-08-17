import {GET_TASK_SUCCESS, GET_CRAWLER_TASK_SUCCESS} from "../actions/home";

const initialState = {
};

export const home = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_TASK_SUCCESS:
            return ({
                ...state,
                taskData: {...action.taskData},
            });

        case GET_CRAWLER_TASK_SUCCESS:
            return ({
                ...state,
                crawlerTaskData: {...action.crawlerTaskData},
            });
        default:
            return state;
    }
};
