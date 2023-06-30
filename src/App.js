import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/ProductList/Component/ProductList";
import { Home } from "./page/Home";
import { LoginPage } from "./page/LoginPage";
import { SignupPage } from "./page/SignupPage";
import { CartPage } from "./page/CartPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Cart } from "./features/Cart/Cart";
import { CheckOut } from "./page/CheckOut";
import ProductDetails from "./features/ProductList/Component/ProductDetails";
import { ProductDetailsPage } from "./page/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/ProductDetails",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
