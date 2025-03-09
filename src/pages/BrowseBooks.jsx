import React from "react";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilterData } from "../redux/Slices/bookSlice";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const filterData = useSelector((state) => state.books.filterData);
  const dispatch = useDispatch();
  console.log(category);

  useEffect(() => {
    dispatch(getFilterData(category));
  }, [category]);

  return (
    <section className="bg-gray-900 text-white">
      <div className="h-full max-w-screen-xl pt-20 mx-auto">
        <h2 className="text-3xl font-semibold pl-8">Browse Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
          {filterData.length > 0 ? (
            filterData.map((book) => <BookCard key={book.id} {...book} />)
          ) : (
            <h2>NO Book Found</h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrowseBooks;
