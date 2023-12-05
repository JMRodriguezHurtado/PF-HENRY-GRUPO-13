import axios from 'axios';
import {
  CLEAR_DATA,
  CLEAR_SEARCH_RESULTS,
  CREATE_NEW_PRODUCT,
  CREATE_REVIEW,
  DELETE_PRODUCTS,
  FINISH_PURCHASE,
  GET_CATEGORIES,
  GET_ALL_USERS,
  GET_USER_BY_ID,
  GET_ALL_PRODUCTS,
  GET_DELETED_PRODUCTS,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_NAME,
  LOCAL_STORAGE,
  POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS,
  POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS,
  REGISTER_ADMIN,
  REMOVE_FROM_CART,
  SEND_TOKEN_GOOGLE_FAILURE, SEND_TOKEN_GOOGLE_REQUEST, SEND_TOKEN_GOOGLE_SUCCESS,
  SET_CURRENT_PAGE, SET_FILTERS,
  UPDATE_PRODUCTS,
  POST_MESSAGE_REQUEST, POST_MESSAGE_FAILURE, POST_MESSAGE_SUCCESS
} from './types';

// Actions

// const URL = https://master--chipper-toffee-f8c293.netlify.app/

const URL = 'http://localhost:3001';

export function setFilters(filters){
  return {
    type: SET_FILTERS,
    payload: filters
  }
}

export function getAllProducts(page, limit, filters) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/product`, {
        params: { page, limit, ...filters },
      });
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
}

export function getProductsByName(name) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`${URL}/product/name?name=${name}`);
        const data = await response.data;
        dispatch({
          type: GET_PRODUCTS_BY_NAME,
          payload: data,
        });
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
  }

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});
  

export function getProductsById(_id) {
    return async function (dispatch) {
      const { data } = await axios.get(`${URL}/product/${_id}`);
      console.log(data);
      dispatch({
        type: GET_PRODUCTS_BY_ID,
        payload: data,
      });
    };
  }
  
export function createProduct(newproduct) {
    console.log(newproduct);
    return async function (dispatch) {
      try {
        const { data } = await fetch.post(`${URL}/product`, newproduct);
        console.log(data);
        console.log(newproduct);
  
        dispatch({
          type: CREATE_NEW_PRODUCT,
          payload: data,
        });
      } catch (error) {
        throw error.response.data;
      }
    };
  }
  
export function deleteProduct(id) {
    return async function (dispatch) {
      const deletedProduct = await fetch.put(`${URL}/product/delete/${id}`);
      dispatch({
        type: DELETE_PRODUCTS,
        payload: deletedProduct.data,
      });
    };
  }

export function updateProduct(payload) {
    return async function (dispatch) {
      console.log(payload.id);
  
      const info = await fetch.put(`${URL}/product/${payload.id}`, payload);
  
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: info.data,
      });
    };
  }

export function getDeletedProducts() {
    return async function (dispatch) {
      const getDeletedProducts = await fetch.get(`${URL}/product/deleted`);
      console.log(getDeletedProducts);
      dispatch({
        type: GET_DELETED_PRODUCTS,
        payload: getDeletedProducts.data.results,
      });
    };
  }

export function createAdmin(payload) {
    return async function (dispatch) {
      try {
        const { data } = await fetch.post(`${URL}/admin`, payload);
        dispatch({
          type: REGISTER_ADMIN,
          payload: data,
        });
      } catch (error) {
        throw error.response.data;
      }
    };
  }

export function createReview(newReview) {
    return async function (dispatch) {
      const reviews = await fetch.post(`${URL}/review`, newReview);
      dispatch({
        type: CREATE_REVIEW,
        payload: reviews.data,
      });
    };
  }

export function putLocalstorage() {
  if (localStorage.getItem('cart')) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    return {
      type: LOCAL_STORAGE,
      payload: cart,
      };
    } else {
      let cart = [];
      return {
        type: LOCAL_STORAGE,
        payload: cart,
      };
    }
  }

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
    };
  }

  export function finishPurchase(objectPago) {
    return async function compra(dispatch) {
      try {
        const response = await axios.post(`${URL}/purchase/order`, objectPago);
        window.location.href = response.data.init_point;
  
        dispatch({
          type: FINISH_PURCHASE,
  
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al tratar de finalizar compra', error);
      }
    };
  }

  export const addToCart = (productById) => ({
    type: 'ADD_TO_CART',
    payload: productById,
  });

  export function getAllUsers() {
    return async function (dispatch) {
      const allUsers = await axios.get(`${URL}/user`);
      dispatch({
        type: GET_ALL_USERS,
        payload: allUsers.data,
      });
    };
  }

  export function getUserByID(id) {
    return async function (dispatch) {
      const { data } = await axios.get(`${URL}/user/${id}`);
      console.log(data);
      dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    };
  }

  export const postLoginRequest = () => ({
    type: POST_LOGIN_REQUEST
  });
  export const postLoginSuccess = (user) => ({
    type: POST_LOGIN_SUCCESS,
    payload: user
  });
  export const postLoginFailure = (error) => ({
    type: POST_LOGIN_FAILURE,
    payload: error
  });
  export const postLogin = (user) => {
    return async (dispatch) => {
      dispatch(postLoginRequest());
      try {
        const { data } = await axios.post(`${URL}/user/login`, user);
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("access", data.access)
        }
        dispatch(postLoginSuccess(data));
      } catch (error) {
        dispatch(postLoginFailure(error.response.data.error));
      }
    };
  };


export const postUserRequest = () => ({
  type: POST_USER_REQUEST
});
export const postUserSuccess = (user) => ({
  type: POST_USER_SUCCESS,
  payload: user
});
export const postUserFailure = (error) => ({
  type: POST_USER_FAILURE,
  payload: error
});
export const postUser = (user) => {
  return async (dispatch) => {
    dispatch(postUserRequest());
    try {
      const { data } = await axios.post(`${URL}/user/signup`, user);
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("access", data.access)
      }
      console.log(data);
      dispatch(postUserSuccess(data));
    } catch (error) {
      dispatch(postUserFailure(error.response.data.error));
    }
  };
};


export const postTokenGoogleRequest = () => ({
  type: SEND_TOKEN_GOOGLE_REQUEST
});
export const postTokenGoogleSuccess = (data) => ({
  type: SEND_TOKEN_GOOGLE_SUCCESS,
  payload: data
});
export const postTokenGoogleFailure = (error) => ({
  type: SEND_TOKEN_GOOGLE_FAILURE,
  payload: error
});
export const postTokenGoogle = (token) => {
  return async (dispatch) => {
    dispatch(postTokenGoogleRequest());
    try {
      const { data } = await axios.post(`${URL}/user/auth`, { token });
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
};


export const clearData = () => ({
  type: CLEAR_DATA,
});


export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}

export const getCategories = () => {
  return async function (dispatch) {
    const categories = await axios.get(`${URL}/categories`);
    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  };

};


export const postMessageRequest = () => ({
  type: POST_MESSAGE_REQUEST
});
export const postMessageSuccess = (message) => ({
  type: POST_MESSAGE_SUCCESS,
  payload: message
});
export const postMessageError = (error) => ({
  type: POST_MESSAGE_FAILURE,
  payload: error
});
export const postMessage = (message) => {
  return async (dispatch) => {
    dispatch(postMessageRequest());
    try {
      const { data } = await axios.post(`${URL}/user/messages`, message);
      console.log(data);
      dispatch(postMessageSuccess(data));
    } catch (error) {
      dispatch(postMessageError(error.response.data.error)); 
    }
  };
};

