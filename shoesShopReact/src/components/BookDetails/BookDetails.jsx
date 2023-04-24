import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const { image, title, desc, authors, publisher, year, rating, url, price } =
    bookDetails;
  const [fold, setFold] = useState(false);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpiner></LoadingSpiner>;
  }

  // console.log(bookDetails);
  return (
    <div className="container mx-auto p-4 mt-10">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-4 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <p className=" text-gray-900">Authors: {authors.substring(0, 50)}</p>
          <p className=" text-gray-900">Publisher: {publisher}</p>
          <p className=" text-gray-900">Year: {year}</p>
          <p className="mb-5 text-gray-900">Rating: {rating}</p>
          {fold ? (
            <>
              <p className=" text-gray-900">
                {desc}...
                <span
                  className="cursor-pointer text-blue-600 "
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </span>
              </p>
            </>
          ) : (
            <>
              <p className=" text-gray-500">
                {desc.substring(0, 100)}...
                <span
                  className="cursor-pointer text-blue-600 "
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </span>
              </p>
            </>
          )}

          <div className="flex gap-5 mt-8 items-center">
            <a href={url} target="_blank" className="btn">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
