import React from "react";
import { Link, NavLink } from "react-router-dom";

const Books = ({ book }) => {
  const { image, title, subtitle, price, isbn13 } = book;
  return (
    <NavLink to={`/book/${isbn13}`}>
      <div className="relative transition duration-500 transform hover:-translate-y-2 rounded-md shadow-lg hover:shadow-2xl ">
        <img className="object-cover w-full h-90" src={image} alt="" />
        <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition duration-500 rounded-md flex flex-col ">
          <p>{title}</p>
          <br />
          <p>{subtitle.substring(0, 100)}...</p>
          <br />
          <p className="mt-auto">{price}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Books;
