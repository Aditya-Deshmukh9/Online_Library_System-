import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addBook } from "../redux/Slices/bookSlice";
import { FIELDS } from "../Utils/MockData";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (
      !form.title.value ||
      !form.author.value ||
      !form.category.value ||
      !form.year.value ||
      !form.genre.value ||
      !form.description.value ||
      !form.rating.value ||
      !form.coverImage.value
    ) {
      alert("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: form.title.value,
      author: form.author.value,
      category: form.category.value,
      year: form.year.value,
      genre: form.genre.value,
      description: form.description.value,
      rating: form.rating.value,
      coverImage: form.coverImage.value,
    };

    dispatch(addBook(newBook));
    navigate("/books/all");
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen max-w-full pt-20 mx-auto flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Book</h2>
        {FIELDS.map((field) => (
          <div className="mb-4" key={field.id}>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor={field.id}
            >
              {field.placeholder}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              ></textarea>
            ) : (
              <input
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                required
                className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="cursor-pointer w-full py-2 px-4 bg-bg hover:bg-bg/40 rounded text-white font-bold"
        >
          Add Book
        </button>
      </form>
    </section>
  );
}

export default AddBook;
