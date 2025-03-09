import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { MdScience } from "react-icons/md";
import { TbChartBarPopular } from "react-icons/tb";
import { Link } from "react-router";

function BookCategories() {
  return (
    <section className="text-white h-1/2 w-[400px] ml-[30%] flex flex-col justify-between items-center capitalize">
      <h2 className="font-semibold text-3xl">Book Categories</h2>
      <div className="flex flex-col h-full mt-3 justify-between items-start pr-10">
        <Link
          to={"/books/popularbooks"}
          className="py-2 text-xl inline-flex items-center gap-2"
        >
          <TbChartBarPopular /> popular Books
        </Link>
        <Link
          to={"/books/fiction"}
          className="py-2 text-xl inline-flex items-center gap-2"
        >
          <FaLightbulb />
          Fiction
        </Link>
        <Link
          to={"/books/nonfiction"}
          className="py-2 text-xl inline-flex items-center gap-2"
        >
          <MdScience /> Non-Fiction
        </Link>
        <Link
          to={"/books/scifiction"}
          className="py-2 text-xl inline-flex items-center gap-2"
        >
          <IoMdBook /> Sci-Fi
        </Link>
      </div>
    </section>
  );
}

export default BookCategories;
