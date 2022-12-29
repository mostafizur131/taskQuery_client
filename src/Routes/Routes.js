import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/Home/AddTask";
import LogIn from "../Pages/LoginAndResgister/LogIn";
import Register from "../Pages/LoginAndResgister/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AddTask />,
      },
      {
        path: "/addTask",
        element: <AddTask />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
