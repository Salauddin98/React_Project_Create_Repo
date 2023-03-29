import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, price, seller, ratings, img, quantity, addToCart } = props;

  return (
    <div className="productsDetails">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="productName">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacture: ${seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button onClick={() => addToCart(props)} className="add-to-cart">
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
