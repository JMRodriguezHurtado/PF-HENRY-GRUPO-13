import api from '../api';
import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  POST_USER_FAILURE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  REGISTER_ADMIN,
} from "../types";

export const getUserByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(`/user/${id}`);
    console.log(data);
    dispatch({
      type: GET_USER_BY_ID,
      payload: data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const createAdmin = (payload) => async (dispatch) => {
  try {
    const { data } = await api.post('/admin', payload);
    dispatch({
      type: REGISTER_ADMIN,
      payload: data,
    });
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const allUsers = await api.get('/user');
    dispatch({
      type: GET_ALL_USERS,
      payload: allUsers.data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const postUserRequest = () => ({
  type: POST_USER_REQUEST,
});

export const postUserSuccess = (user) => ({
  type: POST_USER_SUCCESS,
  payload: user,
});

export const postUserFailure = (error) => ({
  type: POST_USER_FAILURE,
  payload: error,
});

export const postUser = (user) => async (dispatch) => {
  dispatch(postUserRequest());
  try {
    const { data } = await api.post('/user/signup', user);
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("access", data.access);
    }
    console.log(data);
    dispatch(postUserSuccess(data));
  } catch (error) {
    dispatch(postUserFailure(error.response.data.error));
  }
};
