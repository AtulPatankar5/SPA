import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
