export const GET_TASK = 'GET_TASK';
export const GET_TASK_SUCCESS = 'GET_TASK_SUCCESS';
export const GET_CRAWLER = 'GET_CRAWLER_TASK';
export const GET_CRAWLER_SUCCESS = 'GET_CRAWLER_TASK_SUCCESS';
export const GET_RULE = 'GET_RULE';
export const GET_RULE_SUCCESS = 'GET_RULE_SUCCESS';


export const getTask = (apiType) => ({
    type: GET_TASK,
    apiType: apiType,
});

export const getTaskSuccess = (taskData, apiType) => ({
    type: GET_TASK_SUCCESS,
    taskData: taskData,
    apiType: apiType,
});

export const getCrawler = (page, pageSize, apiType) => ({
    type: GET_CRAWLER,
    pageData: {
        page: page,
        pageSize: pageSize,
        apiType: apiType,
    }
});

export const getCrawlerSuccess = (crawlerData, apiType) => {
    // console.log(crawlerData);
    return {
        type: GET_CRAWLER_SUCCESS,
        crawlerData: crawlerData,
        apiType: apiType,
    }
};



