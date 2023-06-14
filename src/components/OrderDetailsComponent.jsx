import "./orderDetailsComponent.css";
import { useSelector } from "react-redux";

export default function OrderDetailsComponent() {
  const orderDetails = useSelector((state) => state.saveOrderDetails);
  return (
    <div className="order-details-container">
      <div className="details-header">
        <span>Order Details</span>
      </div>
      <div className="order-details-cover">
        <h3>Thank you. Your order has been received.</h3>
        <div className="order-header">
          <div className="order-header-child">
            <div className="order-header-value-container">
              <div className="order-header-title">Order no:</div>
              <div className="order-header-value">{orderDetails.orderId}</div>
            </div>
          </div>
          <div className="order-header-child">
            <div className="order-header-value-container">
              <div className="order-header-title">Date:</div>
              <div className="order-header-value">{orderDetails.orderDate}</div>
            </div>
          </div>
          <div className="order-header-child">
            <div className="order-header-value-container">
              <div className="order-header-title">Total:</div>
              <div className="order-header-value">
                ₹ {orderDetails.totalPrice}
              </div>
            </div>
          </div>
          <div className="order-header-child">
            <div className="order-header-value-container">
              <div className="order-header-title">Payment method:</div>
              <div className="order-header-value">
                {orderDetails.userData.payment === "cod"
                  ? "Cash on delivary"
                  : "Online"}
              </div>
            </div>
          </div>
        </div>
        <h2 class="woocommerce-order-details__title">Order details</h2>
        <table>
          <tr class="header-tr1">
            <td>Product</td>
            <td>Subtotal</td>
          </tr>
          {orderDetails &&
            orderDetails.products.length > 0 &&
            orderDetails.products.map((product) => {
              return (
                <tr class="product-tr">
                  <td>
                    <div>
                      <img src={product.image} alt="product" />
                    </div>
                    <span>
                      {product.product_name.substring(0, 30)} ... ×{" "}
                      {product.qty}
                    </span>
                  </td>
                  <td>₹ {product.price}</td>
                </tr>
              );
            })}
          <tr>
            <td>Subtotal:</td>
            <td>₹{orderDetails.totalPrice}</td>
          </tr>
          <tr>
            <td>Payment method:</td>
            <td>
              {orderDetails.userData.payment === "cod"
                ? "Cash on delivary"
                : "Online"}
            </td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>₹{orderDetails.totalPrice}</td>
          </tr>
          <tr className="total1" id="note-tr">
            <td className="notes-header">Note:</td>
            <td className="note-details">
              {orderDetails.userData.notes}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
