import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const cart = useLoaderData();
  const [remove, setRemove] = useState(cart);

  const removeItem = (itemID) => {
    const items = remove.filter((item) => item.id !== itemID);
    setRemove(items);
    removeFromDb(itemID);
  };

  const handleClearCart = () => {
    setRemove([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {remove.map((review) => (
          <ReviewItem
            removeItem={removeItem}
            key={review.id}
            review={review}
          ></ReviewItem>
        ))}
      </div>
      <div className="card-container">
        <Cart handleClearCart={handleClearCart} cart={remove}>
          <Link className="proceed-link" to="/checkout">
            <button className="btn-proceed">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
