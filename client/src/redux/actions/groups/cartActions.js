import api from '../api';
import { ADD_TO_CART, FINISH_PURCHASE, LOCAL_STORAGE, REMOVE_FROM_CART } from '../types';

export const addToCart = (productById) => ({
  type: ADD_TO_CART,
  payload: productById,
});

export const putLocalstorage = () => {
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
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const finishPurchase = (objectPago) => async (dispatch) => {
  try {
    const response = await api.post('/purchase/order', objectPago);
    window.location.href = response.data.init_point;

    dispatch({
      type: FINISH_PURCHASE,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error al tratar de finalizar compra', error);
  }
};
