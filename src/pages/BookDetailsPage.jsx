import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router";
import { getBookDetails } from "../redux/Slices/bookSlice";
import { useSelector } from "react-redux";
import { LuLoader } from "react-icons/lu";

function BookDetailsPage() {
  const { id } = useParams();
  const data = useSelector((state) => state.books.bookDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [id]);

  if (!data) {
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
            to={`/books/${data[0]?.category}`}
            className="rounded-md bg-bg px-5 py-2.5 text-sm font-medium text-white shadow-sm"
          >
            Back
          </Link>
        </div>
        <div className="flex justify-center items-start">
          <img
            src={data[0]?.coverImage}
            alt="Book cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl font-bold">{data[0]?.title}</h1>
          <h2 className="text-2xl italic">by {data[0]?.author}</h2>
          <p className="text-lg">{data[0]?.description}</p>
          <p className="text-sm text-gray-400">Genre: {data[0]?.genre}</p>
          <p className="text-sm text-gray-400">Year: {data[0]?.year}</p>
          <p className="text-sm text-gray-400">Category: {data[0]?.category}</p>
          <p className="text-sm text-yellow-400">
            Rating: {data[0]?.rating} / 5
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookDetailsPage;
