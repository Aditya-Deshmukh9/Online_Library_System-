import React from "react";
import { Link } from "react-router";

function BookCard(book) {
  return (
    <Link
      to={`/book/${book.id}`}
      className="bg-gray-200 px-1 hover:bg-gray-300 hover:scale-110 duration-75 text-black py-2 rounded-lg shadow-lg overflow-hidden relative group"
    >
      <div>
        <img
          className="w-full h-full object-cover"
          src={book.coverImage}
          alt={book.title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-900">{book.author}</p>
      </div>
    </Link>
  );
}

export default BookCard;
