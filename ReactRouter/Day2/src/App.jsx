import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import FeaturedProduct from "./Components/FeaturedProduct";
import NewProducts from "./Components/NewProducts";
import Products from "./Components/Products";

import Users from "./Components/Users/Users";
import Admin from "./Components/Users/Admin";
import UserDetails from "./Components/Users/UserDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-summary" element={<OrderSummary />} />

          {/* Products - Nested Routes */}
          <Route path="/products" element={<Products />}>
            <Route path="features" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProducts />} />
          </Route>

          {/* Users - Nested Routes */}
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;