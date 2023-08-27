import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main.jsx';
import Home from './component/Layout/Home/Home.jsx';
import OrderReviews from './Order Reviews/OrderReviews.jsx';
import Contact from './Contact/Contact.jsx';
import About from './assets/About/About.jsx';
import Grandpa from './component/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch("tshirts.json")
      },
      {
        path:"orderReview",
        element:<OrderReviews></OrderReviews>
      },
      {
        path: "contact",
        element:<Contact></Contact>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"grandpa",
        element: <Grandpa></Grandpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
