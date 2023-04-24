import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  // second system-----
  // const navigate = useNavigate();
  // const handleNavigation = () => {
  //   navigate(`/friend/${friend.id}`);
  // };
  return (
    <div className="border-2 border-orange-700 w-full mt-2 mx-auto p-4">
      <h1>Name: {friend.name}</h1>
      <h1>Email: {friend.email}</h1>
      <h1>Phone: {friend.phone}</h1>
      {/* 1st system */}
      <Link to={`/friend/${friend.id}`}>
        <button className="btn btn-primary border-4 border-orange-100 p-4 rounded-md">
          Show Details
        </button>
      </Link>
      {/* second system */}
      {/* <button onClick={handleNavigation}>with button handler</button> */}
    </div>
  );
};

export default Friend;
