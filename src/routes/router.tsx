import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/counter/Counter";
import ToDoList from "../pages/toDoList/ToDoList";
import PokemonAjax from "../pages/pokemonAjax/PokemonAjax";
import ToDoListAjax from "../pages/toDoListAjax/ToDoListAjax";
import Layout from "./layouts/Layout";
import TelephoneDirectoryDetail from "../pages/telephoneDirectoryDetail/TelephoneDirectoryDetail";
import TelephoneDirectoryLayout from "./layouts/telephoneDirectory/TelephoneDirectoryLayout";
import TelephoneDirectory from "../pages/telephoneDirectory/TelephoneDirectory";
import PokemonAjaxDetail from "../pages/pokemonAjaxDetail/PokemonAjaxDetail";
import Blog from "../pages/blog/Blog";
import BlogLayout from "./layouts/blogLayout/BlogLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Counter />,
      },
      {
        path: "/to-do-list",
        element: <ToDoList />,
      },
      {
        path: "/pokemon-ajax",
        element: <PokemonAjax />,
      },
      {
        path: "/pokemon-ajax/:id",
        element: <PokemonAjaxDetail />,
      },
      {
        path: "/to-do-list-ajax",
        element: <ToDoListAjax />,
      },
      {
        path: "/telephone-directory",
        element: <TelephoneDirectoryLayout />,
        children: [
          {
            path: "",
            element: <TelephoneDirectory />,
          },
          {
            path: ":id",
            element: <TelephoneDirectoryDetail />,
          },
        ],
      },
      {
        path: "/blog",
        element: <BlogLayout />,
        children: [
          {
            path: "",
            element: <Blog />,
          },
        ],
      },
    ],
  },
]);

export default router;
