import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import Counter from "./pages/counter/Counter";
import PokemonAjax from "./pages/pokemonAjax/PokemonAjax";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
