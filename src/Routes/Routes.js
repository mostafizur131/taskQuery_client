import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/Home/AddTask";
import LogIn from "../Pages/LoginAndResgister/LogIn";
import Register from "../Pages/LoginAndResgister/Register";
import MyTasks from "../Pages/MyTasks/MyTasks";

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
        path: "/myTask",
        element: <MyTasks />,
        loader: () =>
          fetch(`https://task-management-server-green.vercel.app/tasks`),
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
