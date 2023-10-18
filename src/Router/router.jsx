import App from "../App";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import PrivateRout from "./PrivateRout";
import AddProduct from "../Pages/AddProduct/AddProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addProduct",
          element: <PrivateRout><AddProduct></AddProduct></PrivateRout>,
        },
        {
          path: "/profile",
          element: <PrivateRout><Profile></Profile></PrivateRout>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/logout",
          element: <Logout></Logout>,
        },
      ],
    },
  ]);

  export default router;