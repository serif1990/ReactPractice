import Header from "../components/Header";
import Promotion from "../components/Promotion";
import Carousal from "../components/Carousal";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

import { useSelector } from "react-redux";

import "./home.css";

export default function Home() {
  const showCart = useSelector((state) => state.showCartReducer);
  return (
    <>
      {showCart && <Cart />}
      <div className="upper-container">
        <Header />
        <Promotion />
        <div className="container" />
      </div>
      <div className="mid-main-container">
        <Carousal />
      </div>
      <WhyChoose />
      <Footer />
    </>
  );
}
