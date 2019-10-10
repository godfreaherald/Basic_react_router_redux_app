import { ADD_USER, USER_LOGIN } from './actionType';

export const addUser = payload => {
  return {
    type: ADD_USER,
    payload
  };
};

export const userLogin = payload => {
  return {
    type: USER_LOGIN,
    payload
  };
};
