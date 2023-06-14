import Footer from "../components/Footer";
import Headers from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

import { useSelector } from "react-redux";

import "./productDescription.css";

export default function ProductDescription() {
  const showCart = useSelector((state) => state.showCartReducer);

  return (
    <>
      {showCart && <Cart />}
      <div className="productDescriptionContainer">
        <Headers />
        <ProductDetails />
        <Footer />
      </div>
    </>
  );
}
