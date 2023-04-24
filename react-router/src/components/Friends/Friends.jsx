import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto">
      {data.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
