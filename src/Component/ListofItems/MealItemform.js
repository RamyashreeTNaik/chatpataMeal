/** @format */

import React, { useState } from "react";
import "./MealItemfor.css";
const MealItemform = (props) => {
  const [amount, setAmount] = useState([]);
  const [cartTotal, setcartTotal] = useState(0);

  const handleAmount = (event, index) => {
    const newamount = [...amount];

    newamount[index] = parseInt(event.target.value);
    setAmount(newamount);
  };

  const handleAddButton = (index) => {
    // const newAmount = amount.reduce((acc, curr) => {
    //   acc = acc + curr;
    //   return acc;
    // }, 0);
    // props.updatedcartCount(newAmount);

    const newAmount = amount[index];
    const newTotal = newAmount + cartTotal;
    setcartTotal(newTotal);
    props.updatedcartCount(newTotal);
  };
  return (
    <form className="form">
      <div className="input">
        <label>Amount: </label>
        <input
          type="number"
          defaultValue="0"
          value={amount[props.index]}
          onChange={(event) => {
            handleAmount(event, props.index);
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          handleAddButton(props.index);
        }}>
        + Add
      </button>
    </form>
  );
};

export default MealItemform;
