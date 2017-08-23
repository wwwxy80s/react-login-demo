export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginAction = (user) => {
  // console.log(user);
  return {
    type: LOGIN_USER,
    user: user,
  }
};

export const loginSuccessAction = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    data: data,
  }
};

export const loginFailureAction = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    data: error,
  }
};
