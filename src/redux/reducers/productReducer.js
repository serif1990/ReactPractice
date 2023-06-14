import { constants } from "../constants/constants";

const initialState = [];

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_PRODUCT:
      return { ...state, payload };
    case constants.ERROR:
      return { payload };
    default:
      return state;
  }
};

export const productDataReducer = (state = [], { type, payload }) => {
  switch (type) {
    case constants.PRODUCT_DETAIL:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
};

export const addToCart = (state = [], { type, payload }) => {
  switch (type) {
    case constants.ADD_TO_CART:
      return [...state, payload];
    case constants.DELETE_ITEM:
      return state.filter((item) => item.id !== payload);
    case constants.UPDATE_QTY:
      if (payload.qty === 0) {
        payload.qty = 1;
      }
      state.map((item) => {
        if (item.id === payload.id) {
          item.qty = payload.qty;
        }
        return [...state, item];
      });
      return state;
    case constants.PLACE_ORDER:
      return payload;
    default:
      return state;
  }
};

export const showCartReducer = (state = false, { type, payload }) => {
  switch (type) {
    case constants.SHOW_CART:
      return payload;
    default:
      return state;
  }
};

export const saveOrderDetails = (state = [], { type, payload }) => {
  switch (type) {
    case constants.SAVE_ORDER_DETAILS:
      return payload;
    default:
      return state;
  }
};
