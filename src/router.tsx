import { createBrowserRouter } from "react-router";
import { Article, Home } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/articles/:articleId", element: <Article /> },
]);
