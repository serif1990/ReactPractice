import { legacy_createStore as crateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./reducers/index";

const store = crateStore(reducer, applyMiddleware(thunk));

export default store;