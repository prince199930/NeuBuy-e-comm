import {ProductType, CartType} from '../../Assets/Types/Product';
import * as actiontypes from '../actiontypes/actionTypes';

const initialState = {
  product: [] as ProductType[],
  cart: [] as CartType[],

  order:[] as CartType[],
};

const productCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actiontypes.GET_PRODUCTS:
      return {
        ...state,

        product: payload,
      };
    case actiontypes.ADD_PRODUCTS:
      let notRepeatProduct = state.cart.filter(item => item.id !== payload.id);
      return { ...state, cart: [...notRepeatProduct, payload] };


     case actiontypes.ADD_ORDERS:
       return{
         ...state,order:[payload,...state.order]
       }
     

    case actiontypes.INC_QUANTITY:
      let quantity = state.cart[payload].quantity;
      quantity += 1;
      const newCart = state.cart.map((item, i) => {
        if (i == payload) {
          item.quantity = quantity;
          return item;
        } else {
          return item;
        }
      });
      return { ...state, cart: newCart };
    case actiontypes.DEC_QUANTITY:
      let decquantity = state.cart[payload].quantity;
      decquantity -= 1;
      const newCarts = state.cart.map((item, i) => {
        if (i == payload) {
          item.quantity = decquantity;
          return item;
        } else {
          return item;
        }
      });

      return { ...state, cart: newCarts };
    case actiontypes.DEL_CART_ITEM:
      return {
        ...state,

        cart: state.cart.filter(item => item.id !== payload),
      };
      case actiontypes.CLEAR_CART:
        return{
          ...state,
          cart:[]
        }
    default:
      return state;
  }
};

export default productCartReducer;