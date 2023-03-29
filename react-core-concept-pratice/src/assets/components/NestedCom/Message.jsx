import React from "react";

const Message = ({ name, img, price }) => {
  // const { name, img, price } = props;
  return (
    <div className="border-4 p-5">
      <img className="w-3/4" src={img} alt="" />
      <h1 className="text-2xl font-bold">Name: {name}</h1>
      <h2 className="text-2xl font-bold">Price: {price}</h2>
    </div>
    // <>
    //   <h1>Name: {name}</h1>
    //   <h1>Age: {age}</h1>
    //   <h1>Department: {department}</h1>
    // </>
  );
};

export default Message;
