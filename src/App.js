import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Applayout } from "./ui/layout";
import { ProductDetail } from "./components/ProductDetail/productDetail";
import { Home } from "./components/home/home";
import { Product } from "./components/productCard/Product";
import { getData } from "./api";
import { ErrorPage } from "./components/errorPage/errorPage";
import { Category } from "./components/category/category";
import { CategoryProduct } from "./components/category/categoryProduct";



function App() {
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      errorElement:<ErrorPage />,
      children:[

        {
          index:true,
          path:"/",
          element:<Home />,
          errorElement:<ErrorPage />,
        },
        {
          path:"/products",
          element:<Product />,
          loader:getData,
        },
        
        {
          path:"/product/:id",
          element:<ProductDetail />,
      
        },
        {
          path:"/categories",
          element:<Category />,
         
        },

        {
          path:"/category/:name",
          element:<CategoryProduct />,

        }


      ]
    }

  
  ])
  return (
       <RouterProvider router={router} />
  );
}

export default App;