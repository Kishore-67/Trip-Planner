import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import { LoginForm } from "./components/Pages/Authentication/LoginForm";
import {SignUp} from "./components/Pages/Authentication/SignUp"
import   Mappage  from "./components/Pages/Mappage";
const appRouter = createBrowserRouter( [
   {
      path:'/',
      element:<App/>
   },
   {
      path:'/login',
      element:<LoginForm/>
   },
   {
      path:'/Signup',
      element:<SignUp/>
   },
   {
      path:'/Mappage',
      element:<Mappage/>
   },
   
])


 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(
    <React.StrictMode>
       <RouterProvider router={appRouter}>
      </RouterProvider>
   </React.StrictMode>
 );
