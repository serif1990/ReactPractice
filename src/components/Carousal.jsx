import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

import "./carousal.css";

export default function Carousal() {
  return (
    <>
      <div className="carousal-container">
        <div className="caro-child">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="caro-child">
          <FontAwesomeIcon icon={faCheckSquare} />
        </div>
        <div className="caro-child">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="caro-child">
          <FontAwesomeIcon icon={faCheckSquare} />
        </div>
        <div className="caro-child">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="caro-child">
          <FontAwesomeIcon icon={faCheckSquare} />
        </div>
      </div>
      <div className="category-div">
        <div className="category-div-inner">
          <h1 className="shop-by-category">Shop by category</h1>
          <div className="cat-container">
            <div className="cart-container-cart">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="King"
              />
            </div>
            <div className="cart-container-cart">
              <img
                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                alt="King"
              />
            </div>
            <div className="cart-container-cart">
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                alt="King"
              />
            </div>
            <div className="cart-container-cart">
              <img
                src="	https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
                alt="King"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
