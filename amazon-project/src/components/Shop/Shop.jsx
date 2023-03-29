import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            addToCart={addToCart}
            {...product}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <h1>products summery</h1>
        <p>Number of product: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
