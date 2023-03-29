import React, { useState } from "react";
import { guns } from "../../../../test";
import { addToCart } from "../utilities/fakeToDb";

const ArrayPratice = () => {
  const [data, setData] = useState(guns);
  const handleRemoveBtn = (id) => {
    setData(data.filter((value) => value.id != id));
  };
  return (
    <section className="mt-10">
      <div className="text-center">
        <h1>Hi</h1>
        {data &&
          data.map((value) => (
            <div>
              <p>Name: {value.name}</p>
              <p>Price: </p>
              <button
                onClick={() => handleRemoveBtn(value.id)}
                className="btn btn-success"
              >
                Remove
              </button>
              <button className="btn ml-2" onClick={() => addToCart(value.id)}>
                Add to Cart
              </button>
            </div>
          ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-accent" onClick={() => setData([])}>
          Remove All
        </button>
      </div>
    </section>
  );
};

export default ArrayPratice;
