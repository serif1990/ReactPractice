import { combineReducers } from "redux";

import {
  productReducer,
  productDataReducer,
  addToCart,
  showCartReducer,
  saveOrderDetails,
} from "../reducers/productReducer";

export const reducer = combineReducers({
  productReducer,
  productDataReducer,
  addToCart,
  showCartReducer,
  saveOrderDetails,
});
