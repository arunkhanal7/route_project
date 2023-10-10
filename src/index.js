import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "../src/routes/Root";
import Products from './routes/Products';
import { Carts } from './routes/Carts';
import Header from './components/Header';
import Product_det from './routes/Product_det';
import Cart_det from './routes/Cart_det';
import store from './store';
import { Provider } from 'react-redux';
import Login from './routes/Login';
import SignUp from './routes/SignUp';




const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children:[
      {
        children:[
          {
            path:"/products",
            element: <Products />,
          },
          {
            path:"/carts",
            element: <Carts />
          }
        ]
      }
    ]
  },{
    path:'/products/:productID',
    element: <Product_det />
  },{
    path:"/carts/:cartID",
    element: <Cart_det />
  },{
    path:"/login",
    element: <Login />
    
  },{
    path:"/signup",
    element: <SignUp />
    
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
