import axios from 'axios';

const axiosIns = axios.create({
    baseURL: '/api/v1',
    timeout: 10000,
});
//code状态码200判断
axiosIns.interceptors.response.use(response => {
    if (response.status !== 200) {
        console.log(response.data.msg);
        return Promise.reject(response);
    }
    return response;
}, (error) => {
    console.log("网络异常");
    return Promise.reject(error);
});

export const getSalt = (username) => {//请求盐值
    return axiosIns.get(`/user/${username}`)
        .then(response => response.data)
        .catch(error => error.data);
};

export const login = (user) => {//用户登陆
    return axiosIns.post('/user', user)
        .then(response => response.data)
        .catch(error => error.data);
};

export const getTask = () => {//任务统计接口
    const token = window.localStorage.getItem('token');
    return axiosIns.get(`/statistics/task`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => error.data);
};

export const getCrawlerTask = (page, pageSize) => {
    const token = window.localStorage.getItem('token');
    return axiosIns.get(`/statistics/crawler/task`, {
        params: {
            page: page,
            pagesize: pageSize,
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then(response => {
        // console.log(response.data);
        return response.data;
    })
        .catch(error => error.data);
};
