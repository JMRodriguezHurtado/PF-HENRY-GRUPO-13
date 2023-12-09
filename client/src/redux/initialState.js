const initialState = {
    products: [],
    productsByName: [],
    productById: [],
    deletedProducts: [],
    restoredProduct: [],
    deletedUser: [],
    allUsersDeleted: {results:[]},
    allUsers: {results: []},
    restoredUser: [],
    admins: [],
    users: [],
    reviews: [],
    localStorage: [],
    cart: [],
    items: [],
    currentPage:1,
    filters:{
      category: '',
      sale: 3,
      price: '',
    },
  
    loadingPostLogin: false, 
    errorPostLogin: false,
    successPostLogin: false,
    access: false,
    messageLogin: '',
  
    loadingPostUser: false,
    errorPostUser: false,
    successPostUser: false,
    messageRegister: '',
  
    loadingPostTokenGoogle: false,
    errorPostTokenGoogle: false,
    successPostTokenGoogle: false,
    messageGoogle: '',
    
    dataUser: [],

    loadingPostCategory: false,
    errorPostCategory: false,
    successPostCategory: false,

    loadingPostMessage: false,
    errorPostMessage: false,
    successPostMessage: false,

    loadingGetUserData: false,
    errorGetUserData: false,
    successGetUserData: false,
    userData: [],

    loadingPutUser: false,
    errorPutUser: false,
    successPutUser: false,

    loadingGetUserPurchase: false,
    errorGetUserPurchase: false,
    successGetUserPurchase: false,
    userPurchase: [],
    
};

export default initialState
