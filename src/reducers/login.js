import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER} from '../actions/login';


const initialState = {
    // userData: {
    //     username: '',
    //     password: '',
    // }
};

export const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN_USER:
            return ({
                ...state,
                userData: {
                    ...action.data
                }
            });
        case LOGIN_USER_SUCCESS:
            const tokenData = action.data.data;
            window.localStorage.setItem('token', tokenData.token);
            return ({
                ...state,
                tokenData: {...action.data.data},
            });
            // return Object.assign({}, {...state}, {tokenData: {...action.data.data}});
        case LOGIN_USER_FAILURE:
            return ({
                ...state,
                ...action.data,
            });
        default:
            return state;
    }
};
