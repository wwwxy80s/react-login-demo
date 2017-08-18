import {GET_TASK_SUCCESS, GET_CRAWLER_SUCCESS} from "../actions/home";

const initialState = {};

export const home = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_TASK_SUCCESS: {
            if (action.apiType === 'rule') {
                return ({
                    ...state,
                    ruleData: {...action.taskData},
                });
            }
            return ({
                ...state,
                taskData: {...action.taskData},
            });
        }
        case GET_CRAWLER_SUCCESS: {
            if (action.apiType === 'group') {
                return ({
                    ...state,
                    crawlerGroupData: {...action.crawlerData},
                });
            }
            return ({
                ...state,
                crawlerTaskData: {...action.crawlerData},
            });
        }
        default:
            return state;
    }
};
