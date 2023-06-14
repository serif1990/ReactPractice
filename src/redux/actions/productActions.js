import { dataSource } from "../../dataSource/dataSource";
import { constants } from "../constants/constants";

export const fetchProducts = () => async (dispatch) => {
  try {
    const productData = await dataSource.get("/products");
    dispatch({
      type: constants.FETCH_PRODUCT,
      payload: productData,
    });
  } catch (error) {
    dispatch({
      type: constants.ERROR,
      payload: "Api is not working",
    });
  }
};

export const viewProduct = (id) => async (dispatch) => {
  const data = await dataSource.get(`/products/${id}`);
  dispatch({
    type: constants.PRODUCT_DETAIL,
    payload: data.data,
  });
};

export const addToCart = (productData) => {
  return {
    type: constants.ADD_TO_CART,
    payload: productData,
  };
};

export const showCart = (flag) => {
  return {
    type: constants.SHOW_CART,
    payload: flag,
  };
};

export const deleteItem = (item_id) => {
  return {
    type: constants.DELETE_ITEM,
    payload: item_id,
  };
};

export const updateQty = (data) => {
  return {
    type: constants.UPDATE_QTY,
    payload: data,
  };
};

export const placeOrder = () => {
  return {
    type: constants.PLACE_ORDER,
    payload: [],
  };
};

export const saveOrderDetails = (data) => {
  return {
    type: constants.SAVE_ORDER_DETAILS,
    payload: data,
  };
};
