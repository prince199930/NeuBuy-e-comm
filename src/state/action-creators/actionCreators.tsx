import { ProductType } from '../../Assets/Types/Product';
import {
  GET_PRODUCTS,
  ADD_PRODUCTS,
  INC_QUANTITY,
  DEC_QUANTITY,
  DEL_CART_ITEM,
  CLEAR_CART,
  ADD_ORDERS,
} from '../actiontypes/actionTypes';

export const getProducts = (productData: ProductType) => ({
  type: GET_PRODUCTS,

  payload: productData,
});

export const addProducts = (product: ProductType) => ({
  type: ADD_PRODUCTS,
  payload: product,
});

export const addOrders = product => ({
  type: ADD_ORDERS,
  payload: product,
});

export const incQty = key => ({
  type: INC_QUANTITY,
  payload: key,
});

export const decQty = key => ({
  type: DEC_QUANTITY,
  payload: key,
});

export const delCartItem = data => ({
  type: DEL_CART_ITEM,
  payload: data,
});
export const cartOrders = () => ({
  type: CLEAR_CART,

});