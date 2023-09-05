/** @format */

import React from "react";
import ItemList from "./ItemList";
import "./Meals.css";
const Meals = (props) => {
  return (
    <div>
      <ul>
        <ItemList
          cartCount={props.cartCount}
          updatedcartCount={props.updatedcartCount}
        />
      </ul>
    </div>
  );
};

export default Meals;
