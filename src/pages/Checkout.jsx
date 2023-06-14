import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import CheckoutComponent from "../components/CheckoutComponent";

import { useSelector } from "react-redux";

export default function Checkout() {
  const showCart = useSelector((state) => state.showCartReducer);
  return (
    <>
      {showCart && <Cart />}
      <div className="checkoutContainer">
        <Header />
        <CheckoutComponent />
        <Footer />
      </div>
    </>
  );
}
