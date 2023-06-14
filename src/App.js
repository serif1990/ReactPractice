import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import OrderDetails from "./pages/OrderDetails";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/products" Component={Products} />
      <Route path="/products/:id" Component={ProductDescription} />
      <Route path="/checkout" Component={Checkout} />
      <Route path="/order-details" Component={OrderDetails} />
      <Route path="*" Component={Error} />
    </Routes>
  );
}

export default App;
