import { createStore } from "redux";
import productCartReducer from "../state/reducers/reducers";


const store = createStore(productCartReducer);
export default store;
