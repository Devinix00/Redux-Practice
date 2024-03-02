import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import Counter from "./pages/counter/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "/to-do-list",
    element: <ToDoList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
