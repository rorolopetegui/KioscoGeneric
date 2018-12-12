import { fromJS } from 'immutable';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ADD_FLAVOR = 'ADD_FLAVOR';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_ROW_CART = 'UPDATE_ROW_CART';
export const TOGGLE_MODAL_REGISTER = 'TOGGLE_MODAL_REGISTER';
export const TOGGLE_PAYMENT_CASH = 'TOGGLE_PAYMENT_CASH';
export const TOGGLE_PAYMENT_CREDIT = 'TOGGLE_PAYMENT_CREDIT';
export const UPDATE_PAYMENT_TOTAL = 'UPDATE_PAYMENT_TOTAL';
export const UPDATE_PAYMENT_SUBTOTAL = 'UPDATE_PAYMENT_SUBTOTAL';
export const UPDATE_PAYMENT_TAX = 'UPDATE_PAYMENT_TAX';

export const initialState = {
  modalOpened: false,
  registerModalOpened: false,
  price: 0,
  type: '',
  selectedFlavors: [],
  cart: [],
  paymentCash: false,
  paymentCredit: false,
  paymentTotal: 0,
  paymentSubTotal: 0,
  paymentTax: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, { modalOpened: action.payload.opened, price: action.payload.price, type: action.payload.type, selectedFlavors: [] })
    case ADD_FLAVOR:
      return Object.assign({}, state, { selectedFlavors: state.selectedFlavors.concat(action.payload) })
    case ADD_TO_CART:
      return Object.assign({}, state, { cart: state.cart.concat(action.payload), selectedFlavors: [] })
    case UPDATE_ROW_CART:
      return Object.assign({}, state, { cart: action.payload, selectedFlavors: [] })
    case TOGGLE_MODAL_REGISTER:
      return Object.assign({}, state, { registerModalOpened: action.payload })
    case TOGGLE_PAYMENT_CASH:
      return Object.assign({}, state, { paymentCash: action.payload })
    case TOGGLE_PAYMENT_CREDIT:
      return Object.assign({}, state, { paymentCredit: action.payload })
    case UPDATE_PAYMENT_TOTAL:
      return Object.assign({}, state, { paymentTotal: action.payload })
    case UPDATE_PAYMENT_SUBTOTAL:
      return Object.assign({}, state, { paymentSubTotal: action.payload })
    case UPDATE_PAYMENT_TAX:
      return Object.assign({}, state, { paymentTax: action.payload })
    default:
      return state;
  }
}

export const toggleModal = (opened = false, price = 0, type = '') => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      opened: opened,
      price: price,
      type: type
    }
  };
}

export const toggleModalRegister = (opened) => {
  return {
    type: TOGGLE_MODAL_REGISTER,
    payload: opened,
  };
}

export const togglePaymentCash = (opened) => {
  return {
    type: TOGGLE_PAYMENT_CASH,
    payload: opened,
  };
}

export const togglePaymentCredit = (opened) => {
  return {
    type: TOGGLE_PAYMENT_CREDIT,
    payload: opened,
  };
}

export const addFlavorToSelected = (flavorName) => {
  if (flavorName) {
    return {
      type: ADD_FLAVOR,
      payload: flavorName,
    };
  }
}

export const addOrderToCart = (price, type, qty, desc) => {
  if (price && type) {
    let img = '';
    if (type === 'Cucurucho') {
      img = 'cucuruchos.jpg';
    } else if (type === 'Familiar') {
      img = 'familiar.jpg';
    } else if (type == 'Frizzio') {
      img = 'frizzio.png';
    } else {
      img = 'palitos.jpg';
    }
    return {
      type: ADD_TO_CART,
      payload: { type: type, price: price, qty: qty, img: img, desc: desc }
    }
  }
}

export const updateCartRow = (cart) => {
  if (cart) {
    return {
      type: UPDATE_ROW_CART,
      payload: cart
    }
  }
} 
export const updatePaymentTotal = (total) => {
  return {
    type: UPDATE_PAYMENT_TOTAL,
    payload: total,
  };
}
export const updatePaymentSubTotal = (subTotal) => {
  return {
    type: UPDATE_PAYMENT_SUBTOTAL,
    payload: subTotal,
  };
}
export const updatePaymentTax = (tax) => {
  return {
    type: UPDATE_PAYMENT_TAX,
    payload: tax,
  };
}