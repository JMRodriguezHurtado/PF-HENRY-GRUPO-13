// actions/productActions.js
import api from '../api';
import {
  CLEAR_SEARCH_RESULTS,
  CREATE_NEW_PRODUCT,
  CREATE_REVIEW,
  DELETE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_CATEGORIES,
  GET_DELETED_PRODUCTS,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_NAME,
  GET_WHOLE_MERCHANDISE,
  SET_CURRENT_PAGE,
  SET_FILTERS,
  UPDATE_PRODUCTS
} from '../types';

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const getWholeMerchandise = () => {
  return async dispatch => {
    try {
      const {data} = await api.get("/product")
      console.log(data)
      dispatch({
        type: GET_WHOLE_MERCHANDISE,
        payload: data.results
      })
    } catch (error) {
      return error.message
    }
  }
}

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await api.get('/categories');
    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const createReview = (newReview) => async (dispatch) => {
  try {
    const reviews = await api.post('/review', newReview);
    dispatch({
      type: CREATE_REVIEW,
      payload: reviews.data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getDeletedProducts = () => async (dispatch) => {
  try {
    const getDeletedProducts = await api.get('/product/deleted');
    console.log(getDeletedProducts);
    dispatch({
      type: GET_DELETED_PRODUCTS,
      payload: getDeletedProducts.data.results,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const updateProduct = (payload) => async (dispatch) => {
  try {
    console.log(payload.id);
    const info = await api.put(`/product/${payload.id}`, payload);
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: info.data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const deletedProduct = await api.put(`/product/delete/${id}`);
    dispatch({
      type: DELETE_PRODUCTS,
      payload: deletedProduct.data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const createProduct = (newproduct) => async (dispatch) => {
  console.log(newproduct);
  try {
    const { data } = await api.post('/product', newproduct);
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

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const getProductsById = (_id) => async (dispatch) => {
  try {
    const { data } = await api.get(`/product/${_id}`);
    console.log(data);
    dispatch({
      type: GET_PRODUCTS_BY_ID,
      payload: data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getAllProducts = (page, limit, filters) => async (dispatch) => {
  try {
    const response = await api.get('/product', {
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

export const getProductsByName = (name) => async (dispatch) => {
  try {
    const response = await api.get(`/product/name?name=${name}`);
    const data = await response.data;
    dispatch({
      type: GET_PRODUCTS_BY_NAME,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.error);
  }
};
