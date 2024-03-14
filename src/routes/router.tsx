import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/counter/Counter";
import ToDoList from "../pages/toDoList/ToDoList";
import PokemonAjax from "../pages/pokemonAjax/PokemonAjax";
import ToDoListAjax from "../pages/toDoListAjax/ToDoListAjax";
import TelephoneDirectory from "../pages/telephoneDirectory/TelephoneDirectory";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
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
        path: "/to-do-list-ajax",
        element: <ToDoListAjax />,
      },
      {
        path: "/telephone-directory",
        element: <TelephoneDirectory />,
      },
    ],
  },
]);

export default router;
