import Header from "../components/Header";
import Footer from "../components/Footer";
import DisplayProduct from "../components/DisplayProduct";
import Cart from "../components/Cart";

import { useSelector } from "react-redux";

export default function Products() {
  const showCart = useSelector((state) => state.showCartReducer);
  return (
    <>
      {showCart && <Cart />}
      <Header />
      <DisplayProduct />
      <Footer />
    </>
  );
}
