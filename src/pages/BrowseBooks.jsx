import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFilterData, getsearchBook } from "../redux/Slices/bookSlice";
import BookCard from "../components/BookCard";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { useSearchParams } from "react-router";

function BrowseBooks() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { filterData } = useSelector((state) => state.books);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFilterData(category));
  }, [category]);

  useEffect(() => {
    const queryFromURL = searchParams.get("query");
    if (queryFromURL) {
      dispatch(getsearchBook(query));
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getsearchBook(query));
    navigate(`?query=${query}`);
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen">
      <div className="h-full max-w-screen-xl pt-20 mx-auto">
        <h2 className="text-3xl font-semibold pl-8">Browse Books</h2>
        <form className="relative mt-8 mx-8" onSubmit={handleSearch}>
          <label htmlFor="Search" className="sr-only">
            Search
          </label>
          <div className="flex items-center bg-gray-800 rounded-full shadow-md">
            <input
              type="text"
              id="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for books..."
              className="w-full rounded-full border-none py-2.5 pl-4 pr-10 text-white bg-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="text-gray-400 hover:text-gray-200 pr-4"
            >
              <IoSearchSharp className="cursor-pointer text-xl" />
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
          {filterData.length > 0 ? (
            filterData.map((book) => <BookCard key={book.id} {...book} />)
          ) : (
            <h2 className="col-span-full text-center">No Books Found</h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrowseBooks;
