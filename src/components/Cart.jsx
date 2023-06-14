import "./cart.css";

import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  showCart,
  deleteItem,
  updateQty,
} from "../redux/actions/productActions";
import { productContextProvider } from "../context/ProductContext";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.addToCart);
  const { decreaseHandler, increaseHandler, setValue } = useContext(
    productContextProvider
  );

  const totalPrice = cartData.reduce((acc, prod) => {
    return acc + prod.qty * prod.price;
  }, 0);

  const inputHandler = (data) => {
    if (data.qty > 0) {
      setValue(data.qty);
      dispatch(updateQty(data));
    }
  };

  const clickHandler = () => {
    dispatch(showCart(false));
  };

  const deleteHandler = (item_id) => {
    dispatch(deleteItem(item_id));
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });

  const increaseQty = (data) => {
    increaseHandler();
    dispatch(updateQty(data));
  };

  const decreaseQty = (data) => {
    if (data.qty > 0) {
      decreaseHandler();
      dispatch(updateQty(data));
    }
  };

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="class-overlay" onClick={clickHandler}></div>
      <div className="cart-main-container">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <span onClick={clickHandler}>X</span>
        </div>
        <div className="showProduct">
          <ul className="products">
            {cartData &&
              cartData.map((item, index) => {
                return (
                  <li className="product" key={index}>
                    <div className="img-div">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="content-div">
                      <div className="product-name" id="prod-name">
                        {item.product_name.substring(0, 30)} ...
                      </div>
                      <div className="product-name">
                        <button
                          className="cart-btn-right qtyManupulation qty-btn"
                          onClick={() =>
                            decreaseQty({
                              id: item.id,
                              qty: item.qty - 1,
                            })
                          }
                        >
                          -
                        </button>
                        <input
                          className="cart-btn-right qtyManupulation"
                          id="form-cart"
                          type="text"
                          value={item.qty}
                          onChange={(e) =>
                            inputHandler({
                              id: item.id,
                              qty: e.target.value,
                            })
                          }
                        />
                        <button
                          className="cart-btn-right qtyManupulation qty-btn"
                          onClick={() =>
                            increaseQty({
                              id: item.id,
                              qty: item.qty + 1,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="price-div">
                      <div className="product-price">
                        <span
                          onClick={() => {
                            deleteHandler(item.id);
                          }}
                        >
                          x
                        </span>
                      </div>
                      <div className="product-price">
                        ₹ {(item.price * item.qty).toFixed(2)}
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="cart-footer">
          <div className="cart-sub-total">
            <span className="cart-sub-total-first">Subtotal:</span>{" "}
            <span className="cart-sub-total-last">
              ₹ {totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="cart-sub-btn">
            <button class="add-to-cart btn-checkout" onClick={checkoutHandler}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
