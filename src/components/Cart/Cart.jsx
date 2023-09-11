import React from "react";
import style from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={style.cart_items}>
      {[
        { id: "c1", name: "sushi", amount: 2 }.map((item) => (
          <li>{item.name}</li>
        )),
      ]}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={style.total}>
        <span>Total amount</span>
        <span>35.36</span>
      </div>
      <div className={style.actions}>
        <button className={style.button_alt}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
