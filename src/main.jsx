import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import BookDetailsPage from "./pages/BookDetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/book/:id",
        element: <BookDetailsPage />,
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
