import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import ErrorPage from './Components/Pages/ErrorPage';
import Home from './Components/Pages/Home';
import AddProduct from './Components/Pages/AddProduct';
import MyCart from './Components/Pages/MyCart';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import AuthProvider from './Components/Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      
    {
    path:"/home",
    element:<Home></Home>

    },
    {
      path:"/addProduct",
      element:<AddProduct></AddProduct>
    },

    {
      path:'/myCart',
      element:<MyCart></MyCart>
    },

    {

      path:"/login",
      element:<Login></Login>


    },

    {

      path:"/register",
      element:<Register></Register>


    }



  
  ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
