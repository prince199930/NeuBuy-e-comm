import axios from 'axios';
export const baseURL = 'https://fakestoreapi.com/products';

export const getProductByCategory = categoryName => {
  return axios.get(`${baseURL}/category/${categoryName}`);
};
export const getAllProducts = () => {
  return axios.get(baseURL);
};
export const getCategories = () => {
  return axios.get(`${baseURL}/categories`);
};