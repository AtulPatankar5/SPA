import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={{ textDecoration: "none" }}>
            PRODUCTS
          </NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/*index refer to immediate parent URL  */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
