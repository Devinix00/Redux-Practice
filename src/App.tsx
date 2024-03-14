import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import Counter from "./pages/counter/Counter";
import PokemonAjax from "./pages/pokemonAjax/PokemonAjax";
import ToDoListAjax from "./pages/toDoListAjax/ToDoListAjax";
import TelephoneDirectory from "./pages/telephoneDirectory/TelephoneDirectory";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
