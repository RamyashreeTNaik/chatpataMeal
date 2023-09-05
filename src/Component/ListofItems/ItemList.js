/** @format */
import React, { useState } from "react";
import items from "./data";
import Card from "../UI/Card/Card";
import "./Meals.css";
// import MealItemform from "./MealItemform";

const ItemList = (props) => {
  const [amount, setAmount] = useState([]);
  const [cartTotal, setcartTotal] = useState(0);

  const handleamountchange = (event, index) => {
    const newamount = [...amount];
    newamount[index] = parseInt(event.target.value);
    setAmount(newamount);
  };

  const handleAddButton = () => {
    const newAmount = amount.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 1);

    // const newTotal = newAmount + cartTotal;
    setcartTotal(newAmount);
    props.updatedcartCount(newAmount);
    console.log(newAmount);
  };

  return (
    <Card>
      {items.map((item, index) => {
        return (
          <li key={index} className="meal">
            <div>
              <h3>{item.name}</h3>
              <div className="des">{item.details}</div>
              <div className="price"> Rs.{item.amount}</div>
            </div>
            <div>
              <lable>Amount:</lable>
              <input
                type="number"
                min="0"
                max="100"
                onChange={(event, index) => handleamountchange(event, index)}
              />
              <button type="button" onClick={handleAddButton}>
                + Add
              </button>
            </div>
          </li>
        );
      })}
    </Card>
  );
};

export default ItemList;
