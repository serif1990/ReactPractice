import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  viewProduct,
  addToCart,
  updateQty,
} from "../redux/actions/productActions";
import { productContextProvider } from "../context/ProductContext";

import "./productDetails.css";

export default function ProductDetails() {
  const data = useSelector((state) => state.productDataReducer.payload);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { decreaseHandler, increaseHandler, valueData, setValue } = useContext(
    productContextProvider
  );

  useEffect(() => {
    dispatch(viewProduct(id));
  }, [dispatch, id]);

  const inputHandler = (e) => {
    if (e.target.value > 0) setValue(e.target.value);
  };

  const addToCartHandler = (data) => {
    dispatch(addToCart(data));
  };

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

  return (
    <div className="detailsContainer">
      {data && (
        <div className="detailsInnerContainer">
          <div className="imageContainer">
            <img src={data && data.image} alt="product" />
          </div>
          <div className="descriptionContainer">
            <p></p>
            <p>{data && data.category}</p>
            <h2>{data && data.title}</h2>
            <h3 className="priceSection">
              ₹ {data && (data.price * 83).toFixed(2)}{" "}
              <span>& free shipping</span>{" "}
            </h3>
            <p>{data && data.description}</p>
            <hr />
            <div className="add-to-cart-form-container">
              <button
                className="qtyManupulation qty-btn"
                onClick={() => {
                  decreaseQty({
                    id: data.id,
                    qty: valueData,
                  });
                }}
              >
                -
              </button>
              <input
                className="qtyManupulation"
                id="form"
                type="text"
                value={valueData}
                onChange={inputHandler}
              />
              <button
                className="qtyManupulation qty-btn"
                onClick={() => {
                  increaseQty({
                    id: data.id,
                    qty: valueData,
                  });
                }}
              >
                +
              </button>
              <button
                className="add-to-cart"
                onClick={() => {
                  addToCartHandler({
                    id: id,
                    qty: valueData,
                    product_name: data.title,
                    image: data.image,
                    price: data.price * 83,
                  });
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
      {!data && (
        <div className="data-availablity-container">
          <div className="data-available-inner-container">
            <p><span>Product is n</span><span id="changeColor">ot available.</span></p>
          </div>
          <div className="data-available-inner-container data-available-empty-container"></div>
        </div>
      )}
    </div>
  );
}
