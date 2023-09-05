/** @format */

import React from "react";
import Cart from "../Cart/Cart";
import meals from "../images/meals.jpg";
import "./Header.css";
import Description from "./Description";
function Header(props) {
  return (
    <div>
      <div>
        <header className="header"ch>
          <h1>Chatpata Meal</h1>
          <Cart cartCount={props.cartCount} />
        </header>
      </div>
      <div className="foodimage">
        <img src={meals} alt="Food items" />
      </div>
      <Description />
    </div>
  );
}

export default Header;
