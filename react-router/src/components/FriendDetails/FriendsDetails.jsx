import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendsDetails = () => {
  const friendData = useLoaderData();
  const navigate = useNavigate();
  // console.log(friendData);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1> Name: {friendData.name}</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default FriendsDetails;
