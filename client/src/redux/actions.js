// Products

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCTS_BY_NAME = 'GET_PRODUCTS_BY_NAME';
export const GET_PRODUCTS_BY_ID = 'GET_BY_ID';
export const CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const GET_DELETED_PRODUCTS = 'GET_DELETED_PRODUCTS';

// Admin

export const REGISTER_ADMIN = 'REGISTER_NEW_ADMIN';

// Users

export const REGISTER_USER = 'REGISTER_NEW_USER';

// Reviews

export const CREATE_REVIEW = 'CREATE_REVIEW';

// Actions

const URL = 'http://localhost:3001';

export function getAllProducts() {
    return async function (dispatch) {
      const productsInfo = await fetch.get(`${URL}/product`);
      console.log(productsInfo);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: productsInfo.data.results,
      });
    };
  }

export function getProductsByName(name) {
    return async function (dispatch) {
      const productsname = (await fetch.get(`${URL}/product/name/${name}`)).data;
      dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: productsname,
      });
    };
  }
  
export function getProductsById(id) {
    return async function (dispatch) {
      const { data } = await fetch.get(`${URL}/product/${id}`);
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
  
      const info = await fetch.put(`${URL}/product/put/${payload.id}`, payload);
  
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


export function createReview(newReview) {
    return async function (dispatch) {
      const reviews = await fetch.post(`${URL}/review`, newReview);
      dispatch({
        type: CREATE_REVIEW,
        payload: reviews.data,
      });
    };
  }




