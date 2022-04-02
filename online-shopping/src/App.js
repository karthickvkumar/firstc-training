import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './pages/home';
import ProductPage from './pages/product';
import ShopPage from './pages/shop';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import PageNotFoundPage from './pages/page-not-found';

import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";
import "./css/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='shop' element={<ShopPage></ShopPage>}></Route>
        <Route path='product/:id' element={<ProductPage></ProductPage>}></Route>
        <Route path='cart' element={<CartPage></CartPage>}></Route>
        <Route path='checkout' element={<CheckoutPage></CheckoutPage>}></Route>

        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;