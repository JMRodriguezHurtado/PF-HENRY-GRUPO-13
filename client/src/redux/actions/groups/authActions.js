import api from '../api';
import {
  CLEAR_DATA,
  POST_LOGIN_FAILURE,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_MESSAGE_FAILURE,
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
  SEND_TOKEN_GOOGLE_FAILURE,
  SEND_TOKEN_GOOGLE_REQUEST,
  SEND_TOKEN_GOOGLE_SUCCESS,
} from '../types';

export const postLoginRequest = () => ({
  type: POST_LOGIN_REQUEST,
});

export const postLoginSuccess = (user) => ({
  type: POST_LOGIN_SUCCESS,
  payload: user,
});

export const postLoginFailure = (error) => ({
  type: POST_LOGIN_FAILURE,
  payload: error,
});

export const postLogin = (user) => async (dispatch) => {
  dispatch(postLoginRequest());
  try {
    const { data } = await api.post('/user/login', user);
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("access", data.access);
    }
    dispatch(postLoginSuccess(data));
  } catch (error) {
    dispatch(postLoginFailure(error.response.data.error));
  }
};

export const postMessageRequest = () => ({
  type: POST_MESSAGE_REQUEST,
});

export const postMessageSuccess = (message) => ({
  type: POST_MESSAGE_SUCCESS,
  payload: message,
});

export const postMessageError = (error) => ({
  type: POST_MESSAGE_FAILURE,
  payload: error,
});

export const postMessage = (message) => async (dispatch) => {
  dispatch(postMessageRequest());
  try {
    const { data } = await api.post('/user/messages', message);
    console.log(data);
    dispatch(postMessageSuccess(data));
  } catch (error) {
    dispatch(postMessageError(error.response.data.error));
  }
};

export const postTokenGoogleRequest = () => ({
  type: SEND_TOKEN_GOOGLE_REQUEST,
});

export const postTokenGoogleSuccess = (data) => ({
  type: SEND_TOKEN_GOOGLE_SUCCESS,
  payload: data,
});

export const postTokenGoogleFailure = (error) => ({
  type: SEND_TOKEN_GOOGLE_FAILURE,
  payload: error,
});

export const postTokenGoogle = (token) => async (dispatch) => {
  dispatch(postTokenGoogleRequest());
  try {
    const { data } = await api.post('/user/auth', { token });
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("access", data.access);
    }
    dispatch(postTokenGoogleSuccess(data));
  } catch (error) {
    dispatch(postTokenGoogleFailure(error));
  }
};

export const clearData = () => ({
  type: CLEAR_DATA,
});
