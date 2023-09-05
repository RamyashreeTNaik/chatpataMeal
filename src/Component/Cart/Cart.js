/** @format */

import React, { useState } from "react";
import "./Cart.css";
function Cart(props) {
  const [buttonClick, setbuttonClick] = useState(false);

  const handleCart = () => {
    setbuttonClick(true);
  };
  const handleClose = () => {
    setbuttonClick(false);
  };
  return (
    <div>
      <div>
        <button className="cartButton" onClick={handleCart}>
          <span>Your Cart : </span>
          <span className="badge">{props.cartCount}</span>
        </button>
      </div>
      <div>
        {buttonClick && (
          <div className="formsidemenu">
            <lable>Crave List </lable>

            <button className="order">Order</button>
            <button className="close" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
