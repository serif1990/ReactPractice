import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../redux/actions/productActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

export default function Header() {
  const cartData = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(showCart(true));
  };

  let count = 0;
  if (cartData)
    count = cartData.reduce((acc, item) => acc + parseInt(item.qty), 0);
  return (
    <div className="headerContainer">
      <div className="innerContainer">
        <div className="leftContainer subContainers">
          <NavLink to={"/"}>
            <img src="/images/favicon.ico.png" alt="Logo" />
          </NavLink>
        </div>
        <div className="middleContainer subContainers">
          <ul className="mid-link">
            <li className="mid-links padding-link">
              <NavLink to={"/products"}>Shop All</NavLink>
            </li>
            <li className="mid-links padding-link">Hero Products</li>
          </ul>
        </div>
        <div className="rightContainer subContainers">
          <ul className="mid-link">
            <li className="mid-links">
              <NavLink to={"/products"}>Shop All</NavLink>
            </li>
            <li className="mid-links">Hero Products</li>
            <li className="mid-links">Hero Products</li>
            <li className="add-to-cart-icon" onClick={clickHandler}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count">{count}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
