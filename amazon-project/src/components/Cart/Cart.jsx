import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // console.log(product.quantity);
    product.quantity = product.quantity || 1;
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    // console.log(product.quantity);
    // console.log(product.quantity);
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const taxTotal = (total * 7) / 100;
  const grandTotal = total + shipping + taxTotal;
  return (
    <div className="cart">
      <h1>products summery</h1>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping:${shipping} </p>
      <p>Tax: ${taxTotal.toFixed(2)}</p>
      <p>Grand Total:${grandTotal.toFixed(2)} </p>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
