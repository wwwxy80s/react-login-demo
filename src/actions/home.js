export const GET_TASK = 'GET_TASK';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const GET_CRAWLER = 'GET_CRAWLER';
export const GET_RULE = 'GET_RULE';


export const getTask = () => {
    return {
        type: GET_TASK,
    };
};

export const getTaskSuccess = (taskData) => {
    return {
        type:GET_TASK_SUCCESS,
        taskData:taskData,
    }
};