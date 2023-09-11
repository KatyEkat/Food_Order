import React from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";

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
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total amount</span>
        <span>35.36</span>
      </div>
      <div className={style.actions}>
        <button className={style.button_alt}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
