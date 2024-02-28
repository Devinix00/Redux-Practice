import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import ToDoList from "./pages/toDoList/ToDoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
