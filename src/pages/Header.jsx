import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="absolute z-50 top-0 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to={"/"} className="block text-white">
              <h1 className="text-2xl font-bold">Online Library System</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-bg px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                to={"/books/all"}
              >
                Browse Book
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-bg"
                  to={"/add-book"}
                >
                  Add book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
