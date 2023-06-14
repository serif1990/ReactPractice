import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductContext from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContext>
    </Provider>
  </React.StrictMode>
);
