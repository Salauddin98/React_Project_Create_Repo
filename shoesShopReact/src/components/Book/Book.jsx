import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Books from "../Books/Books";
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner";

const Book = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpiner></LoadingSpiner>;
  }

  const books = useLoaderData();
  return (
    <section className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-4 gap-10">
        {books.books.map((book) => (
          <Books key={book.isbn13} book={book}></Books>
        ))}
      </div>
    </section>
  );
};

export default Book;
