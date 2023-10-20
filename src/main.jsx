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
import Apple from './Components/AllPhones/Apple';
import Samsung from './Components/AllPhones/Samsung';
import Oppo from './Components/AllPhones/Oppo';
import Symphony from './Components/AllPhones/Symphony';
import Sony from './Components/AllPhones/Sony';
import Vivo from './Components/AllPhones/Vivo';
import PrivateRoute from './Components/Routes/PrivateRoute';
import ProductDetails from './Components/Pages/ProductDetails';
import Update from './Components/Pages/Update';



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
      element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },

    {
      path:'/myCart',
      element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
    },

    {

      path:'/product',
      element: <PrivateRoute> <ProductDetails></ProductDetails></PrivateRoute>


    },

    {

      path:'/update',
      element: <Update></Update>


    },



    {

      path:"/login",
      element:<Login></Login>


    },

    {

      path:"/register",
      element:<Register></Register>

    },
    {
      path:"/apple",
      element:<Apple></Apple>,
      loader:() => fetch ('http://localhost:5000/product')

    },

    {
      path:"/samsung",
      element:<Samsung></Samsung>

    },
    {
      path:"/oppo",
      element:<Oppo></Oppo>,
      loader:() => fetch ('http://localhost:5000/product')

    },
    {
      path:"/symphony",
      element:<Symphony></Symphony>

    },
    {
      path:"/sony",
      element:<Sony></Sony>

    },
    {
      path:"/vivo",
      element:<Vivo></Vivo>

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
