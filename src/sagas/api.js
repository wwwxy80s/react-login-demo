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

export const getSalt = (username) => {
    // console.log(username);
    return axiosIns.get(`/user/${username}`)
        .then(response => response.data)
        .catch(error => error.data);
};

export const login = (user) => {
    return axiosIns.post('/user', user)
        .then(response => response.data)
        .catch(error => error.data);
};

export const getTask = () => {
    return axiosIns.get(`/statistics/task`)
        .then(response => {
            // console.log(response.data);
            return response.data;
        })
        .catch(error => error.data);
};
