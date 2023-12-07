import {
  ADD_TO_CART,
  CLEAR_DATA,
  CLEAR_SEARCH_RESULTS,
  CREATE_NEW_PRODUCT,
  CREATE_REVIEW,
  DELETE_PRODUCTS,
  FINISH_PURCHASE,
  GET_ALL_PRODUCTS,
  GET_ALL_USERS,
  GET_DELETED_PRODUCTS,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_NAME,
  GET_USER_BY_ID,
  LOCAL_STORAGE,
  POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS,
  POST_MESSAGE_FAILURE, POST_MESSAGE_REQUEST, POST_MESSAGE_SUCCESS,
  POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS,
  REGISTER_ADMIN,
  REGISTER_USER,
  REMOVE_FROM_CART,
  SEND_TOKEN_GOOGLE_FAILURE, SEND_TOKEN_GOOGLE_REQUEST, SEND_TOKEN_GOOGLE_SUCCESS,
  SET_CURRENT_PAGE,
  UPDATE_PRODUCTS
} from '../actions/types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        productsByName: action.payload,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        productsByName: []
      };

    case GET_PRODUCTS_BY_ID:
      return {
        ...state,
        productById: action.payload,
      };

    case CREATE_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    case GET_DELETED_PRODUCTS:
      return {
        ...state,
        deletedProducts: action.payload,
      };

    case REGISTER_ADMIN:
      return {
        ...state,
        admins: [...state.admins, action.payload],
      };

    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case CREATE_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    
    case LOCAL_STORAGE:
      return {
        ...state,
        localstorage: [action.payload],
        };
  
    case REMOVE_FROM_CART:
      // eslint-disable-next-line no-case-declarations
      const productIdToRemove = action.payload;
        return {
        ...state,
         cart: state.cart.filter(item => item.id !== productIdToRemove),
        };
    case FINISH_PURCHASE:
        return {
          ...state,
            cart: action.payload
            };
    
    case ADD_TO_CART:
        return {
          ...state,
            cart: [...state.cart, action.payload],
              };

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
        };
    case GET_USER_BY_ID:
      return {
        ...state,
        userDetail: action.payload,
          };

    case POST_LOGIN_REQUEST:
      return {
        ...state,
        loadingPostLogin: true,
        errorPostLogin: false,
        successPostLogin: false,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        loadingPostLogin: false,
        errorPostLogin: false,
        successPostLogin: true,
        access: action.payload.access,
        messageLogin: action.payload.data.message,
        dataUser: action.payload.data
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        loadingPostLogin: false,
        errorPostLogin: action.payload,
        successPostLogin: false,
      };

    case POST_USER_REQUEST:
      return {
        ...state,
        loadingPostUser: true,
        errorPostUser: false,
        successPostUser: false,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        loadingPostUser: false,
        errorPostUser: false,
        successPostUser: true,
        access: action.payload.access,
        messageRegister: action.payload.data.message,
        dataUser: action.payload.data
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        loadingPostUser: false,
        errorPostUser: action.payload,
        successPostUser: false,
      };

    case SEND_TOKEN_GOOGLE_REQUEST:
      return {
        ...state,
        loadingPostTokenGoogle: true,
        errorPostTokenGoogle: false,
        successPostTokenGoogle: false,
      };
    case SEND_TOKEN_GOOGLE_SUCCESS:
      return {
        ...state,
        loadingPostTokenGoogle: false,
        errorPostTokenGoogle: false,
        successPostTokenGoogle: true,
        access: action.payload.access,
        dataUser: action.payload.data,
        messageGoogle: action.payload.data.message
      };
    case SEND_TOKEN_GOOGLE_FAILURE:
      return {
        ...state,
        loadingPostTokenGoogle: false,
        errorPostTokenGoogle: action.payload,
        successPostTokenGoogle: false,
      };

    case CLEAR_DATA:
      return {
        ...state,
        messageLogin: '',
        messageRegister: '',
        messageGoogle: '',
        loadingPostLogin: false,
        errorPostLogin: false,
        successPostLogin: false,
        access: false,
        loadingPostUser: false,
        errorPostUser: false,
        successPostUser: false,
        loadingPostTokenGoogle: false,
        errorPostTokenGoogle: false,
        successPostTokenGoogle: false,
        dataUser: [],
      };

    case POST_MESSAGE_REQUEST:
      return{
        ...state,
        loadingPostMessage: true,
        errorPostMessage: false,
        successPostMessage: false,
      }
    case POST_MESSAGE_SUCCESS:
      return{
        ...state,
        loadingPostMessage: false,
        errorPostMessage: false,
        successPostMessage: true,
      }
    case POST_MESSAGE_FAILURE:
      return{
        ...state,
        loadingPostMessage: false,
        errorPostMessage: action.payload,
        successPostMessage: false,
      }
    default:
      return state;
  }
};
  
export default reducer;