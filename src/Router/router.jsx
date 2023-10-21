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
import MyCart from "../Pages/MyCart/MyCart";
import BrandItem from "../Pages/BrandItem/BrandItem";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";

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
          path: "/brands/:id",
          element: <PrivateRout><BrandItem></BrandItem></PrivateRout>,
          loader : ()=>fetch('https://brand-server-asif-ahammeds-projects.vercel.app/product')
        },
        {
          path: "/myCart",
          element: <PrivateRout><MyCart></MyCart></PrivateRout>,
          loader : ()=>fetch('https://brand-server-asif-ahammeds-projects.vercel.app/carts')
        },
        {
          path: "/details/:id",
          element: <PrivateRout><ProductDetails></ProductDetails></PrivateRout>,
          loader : ({params})=>fetch(`https://brand-server-asif-ahammeds-projects.vercel.app/product/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <PrivateRout><UpdatePage></UpdatePage></PrivateRout>,
          loader : ({params})=>fetch(`https://brand-server-asif-ahammeds-projects.vercel.app/product/${params.id}`)
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