import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router";
import { getBookDetails } from "../redux/Slices/bookSlice";
import { useSelector } from "react-redux";
import { LuLoader } from "react-icons/lu";

function BookDetailsPage() {
  const { id } = useParams();
  const { searchQuery, bookDetails } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [id]);

  if (!bookDetails) {
    return (
      <div className="h-screen w-full bg-gray-900 text-white flex items-center justify-center">
        <LuLoader className="animate-spin" size={25} />
      </div>
    );
  }

  return (
    <section className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-screen-xl pt-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 flex justify-start px-4 mb-1">
          <Link
            to={
              searchQuery
                ? `/books/${bookDetails[0]?.category}?query=${searchQuery}`
                : `/books/${bookDetails[0]?.category}`
            }
            className="rounded-md bg-bg px-5 py-2.5 text-sm font-medium text-white shadow-sm"
          >
            Back
          </Link>
        </div>
        <div className="flex justify-center items-start">
          <img
            src={bookDetails[0]?.coverImage}
            alt="Book cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl font-bold">{bookDetails[0]?.title}</h1>
          <h2 className="text-2xl italic">by {bookDetails[0]?.author}</h2>
          <p className="text-lg">{bookDetails[0]?.description}</p>
          <p className="text-sm text-gray-400">
            Genre: {bookDetails[0]?.genre}
          </p>
          <p className="text-sm text-gray-400">Year: {bookDetails[0]?.year}</p>
          <p className="text-sm text-gray-400">
            Category: {bookDetails[0]?.category}
          </p>
          <p className="text-sm text-yellow-400">
            Rating: {bookDetails[0]?.rating} / 5
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookDetailsPage;
