/** @format */
import React, { useState } from "react";

import "./App.css";
import Header from "./Component/Header/Header";
import Meals from "./Component/ListofItems/Meals";

function App() {
  const [cartNo, setCartNo] = useState();

  const handleCartAmount = (count) => {
    console.log(count);
    setCartNo(count);
  };
  return (
    <div className="App">
      <Header cartCount={cartNo} />
      <Meals
        cartCount={cartNo}
        updatedcartCount={(count) => {
          handleCartAmount(count);
        }}
      />
    </div>
  );
}

export default App;
