import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

import "./displayProduct.css";

export default function DisplayProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productReducer.payload);
  console.log("test----", typeof productData);
  const data = productData ? productData.data : [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const viewProductHandler = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="display-product-main-container">
      <div className="display-product-inner-container">
        <h1 className="product-header">Shop</h1>
        <div className="show-product-container">
          {typeof data === "string" || typeof data === "undefined" ? (
            <div className="product-error-div">
              <div className="leftError error-inner-div">
                <span>Api is not working.</span>
              </div>
              <div className="rightError error-inner-div"></div>
            </div>
          ) : (
            ""
          )}
          {typeof data !== "string" &&
            typeof data !== "undefined" &&
            data.map((item) => {
              return (
                <div
                  className="product-cart"
                  key={item.id}
                  onClick={() => {
                    viewProductHandler(item.id);
                  }}
                >
                  <img src={item.image} alt="product img" />
                  <h3>{item.title}</h3>
                  <h4>₹ {(item.price * 83).toFixed(2)}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
