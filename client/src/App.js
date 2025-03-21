import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Brands from "./Brands";

import Carts from "./NavBar/Carts";
import Home from "./NavBar/Home";
import Login from "./NavBar/Login";
import Nav from "./NavBar/Nav";
import Products from "./NavBar/Products";
import SignUp from "./NavBar/SignUp";
import ShoeDetails from "./ShoeDetails";
import ShoeList from "./ShoeList";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/shoelist" element={<ShoeList />} />
        <Route path="/shoe/:id" element={<ShoeDetails />} />
        <Route path="/brands" element={<Brands />} />

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
