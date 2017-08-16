export const GET_TASK = 'GET_TASK';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const GET_CRAWLER_TASK = 'GET_CRAWLER_TASK';
export const GET_CRAWLER_TASK_SUCCESS = 'GET_CRAWLER_TASK_SUCCESS';
export const GET_RULE = 'GET_RULE';


export const getTask = () => ({
    type: GET_TASK,
});

export const getTaskSuccess = (taskData) => ({
    type: GET_TASK_SUCCESS,
    taskData: taskData,
});

export const getCrawlerTask = (page, pageSize) => ({
    type: GET_CRAWLER_TASK,
    pageData: {
        page: page,
        pageSize: pageSize
    }
});

export const getCrawlerTaskSuccess = (crawlerTaskData) => {
    console.log(crawlerTaskData);
    return {
        type: GET_CRAWLER_TASK_SUCCESS,
        crawlerTaskData: crawlerTaskData,
    }
};

