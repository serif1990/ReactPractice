import "./checkoutComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { placeOrder, saveOrderDetails } from "../redux/actions/productActions";

export default function CheckoutComponent() {
  const cartData = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [showPayment, setShowPayment] = useState("online");

  const email = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const company_name = useRef();
  const region = useRef();
  const apartment = useRef();
  const state = useRef();
  const street = useRef();
  const city = useRef();
  const zip_code = useRef();
  const phone = useRef();
  const notes = useRef();

  const totalPrice = cartData.reduce((acc, prod) => {
    return acc + prod.qty * prod.price;
  }, 0);

  const dateFormatter = () => {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }
    today = `${mm}-${dd}-${yyyy}`;
    return today;
  };

  const paymentDataHandler = (e) => {
    setShowPayment(() => e.target.value);
  };

  const orderPlaceHandler = () => {
    const formData = {
      userData: {
        email: email.current.value,
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        company_name: company_name.current.value,
        region: region.current.value,
        apartment: apartment.current.value,
        state: state.current.value,
        street: street.current.value,
        city: city.current.value,
        zip_code: zip_code.current.value,
        phone: phone.current.value,
        notes: notes.current.value,
        payment: showPayment,
      },
      products: cartData,
      totalPrice,
      orderDate: dateFormatter(),
      orderId: (Math.random() * 100000).toString().split(".")[0],
    };

    dispatch(saveOrderDetails(formData));

    email.current.value = "";
    last_name.current.value = "";
    first_name.current.value = "";
    company_name.current.value = "";
    region.current.value = "";
    apartment.current.value = "";
    state.current.value = "";
    street.current.value = "";
    city.current.value = "";
    zip_code.current.value = "";
    phone.current.value = "";
    notes.current.value = "";
    setShowPayment(() => null);

    navigate("/order-details");

    const msg =
      totalPrice > 0
        ? "Order Place Successfully"
        : "Can't place order without any item added";

    setShowModal(true);
    setShowMessage(msg);
    dispatch(placeOrder());
    setTimeout(() => {
      setShowModal(false);
      setShowMessage("");
    }, 3000);
  };

  return (
    <div className="checkoutCompContainer1">
      {showModal && (
        <div className="order-confirm-modal-container">
          <span id="error-message">{showMessage}</span>
        </div>
      )}
      <div className="innerContainertop1">
        <h1>Checkout</h1>
      </div>
      <div className="innerContainer1">
        <div className="dataContainer1 leftContainer1">
          <h2>Customer information</h2>
          <input type="text" name="email" placeholder="Email" ref={email} />
          <h2>Billing details</h2>
          <div className="name-container">
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              ref={first_name}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              ref={last_name}
            />
          </div>
          <input
            type="text"
            name="company_name"
            placeholder="Company name"
            ref={company_name}
          />
          <input
            type="text"
            name="region"
            placeholder="Region"
            className="pd-top"
            ref={region}
          />
          <div className="name-container pd-top">
            <input
              type="text"
              name="street"
              placeholder="Street name"
              ref={street}
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment number"
              ref={apartment}
            />
          </div>
          <div className="name-container three-input pd-top">
            <input type="text" name="state" placeholder="State" ref={state} />
            <input type="text" name="city" placeholder="City" ref={city} />
            <input
              type="number"
              name="zip_code"
              placeholder="Zip Code"
              ref={zip_code}
            />
          </div>
          <input type="text" name="phone" placeholder="Phone" ref={phone} />
          <h2>Additional Information</h2>
          <input
            type="text"
            name="notes"
            placeholder="Notes about your order"
            ref={notes}
          />
          <p id="ast-coupon-trigger">Have a coupon?</p>
          <h2>Payment</h2>
          <div className="payment-container pd-bottom">
            <ul>
              <li className="first-li">
                <input
                  type="radio"
                  id="online"
                  name="payment"
                  className="radio"
                  value="online"
                  onClick={paymentDataHandler}
                />
                <label forhtml="online">Online</label>
              </li>
              <li className="last-li">
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  className="radio"
                  value="cod"
                  onClick={paymentDataHandler}
                />
                <label forhtml="cod">Cash on delivary</label>
              </li>
            </ul>
          </div>
          <button className="place-order-btn" onClick={orderPlaceHandler}>
            Place Order ₹{totalPrice.toFixed(2)}
          </button>
        </div>
        <div className="dataContainer1 rightContainer1">
          <div className="productContainer1">
            <div className="productInnerContainer1">
              <h2>Your Order</h2>
              <table>
                <tr className="header-tr1">
                  <td>Product</td>
                  <td>Subtotal</td>
                </tr>
                {cartData &&
                  cartData.map((item) => {
                    return (
                      <tr className="product-tr" key={item.id}>
                        <td>
                          <div>
                            <img src={item.image} alt="product" />
                          </div>
                          <span>
                            {item.product_name.substring(0, 30)} ... ×{" "}
                            {item.qty}
                          </span>
                        </td>
                        <td>₹ {(item.price * item.qty).toFixed(2)}</td>
                      </tr>
                    );
                  })}
                {!cartData && (
                  <tr className="product-tr">
                    <td>No data available</td>
                  </tr>
                )}
                <tr>
                  <td>Subtotal</td>
                  <td>₹{totalPrice.toFixed(2)}</td>
                </tr>
                <tr className="total1">
                  <td>Total</td>
                  <td>₹{totalPrice.toFixed(2)}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
