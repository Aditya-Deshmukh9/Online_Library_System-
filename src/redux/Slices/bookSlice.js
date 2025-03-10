import { createSlice } from "@reduxjs/toolkit";
import MockBookData from "../../Utils/MockBookData";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    data: MockBookData,
    filterData: [],
    bookDetails: [],
    searchQuery: "",
  },
  reducers: {
    getsearchBook: (state, action) => {
      let query = action.payload.toLowerCase();
      state.filterData = state.data.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
      );
      state.searchQuery = query;
    },
    getFilterData: (state, action) => {
      const category = action.payload.toLowerCase();
      if (category === "all") {
        state.filterData = state.data;
      } else {
        state.filterData = state.data.filter(
          (book) => book.category.toLowerCase() === category
        );
      }
    },
    getBookDetails: (state, action) => {
      state.bookDetails = state.data.filter(
        (book) => book.id == action.payload
      );
    },
    addBook: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
});

export const { getsearchBook, getFilterData, getBookDetails, addBook } =
  bookSlice.actions;

export default bookSlice.reducer;
