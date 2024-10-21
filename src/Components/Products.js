import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      pname: "APPLE",
      price: 20,
      shipping: 5,
      img: "https://plus.unsplash.com/premium_photo-1673356427831-60e9492599c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBmcnVpdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      pname: "BANANA",
      price: 30,
      shipping: 10,
      img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuYW5hJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      pname: "GRAPES",
      price: 50,
      shipping: 3,
      img: "https://images.unsplash.com/photo-1697403208248-a1757c58f9b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D"    },
    {
      id: 4,
      pname: "ORANGES",
      price: 70,
      shipping: 7,
      img: "https://plus.unsplash.com/premium_photo-1667417682066-c07a43831f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlcyUyMGZydWl0fGVufDB8fDB8fHww",
    },
  ]);
  return (
    <div>
      <ul>
        {products.map((prod, i) => {
          return (
            <li key={i} className="card">
              <Link
                state={prod}
                to={`/products/${prod.id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={prod.img} />

                <div className="text">
                  <h3>{prod.pname}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
      {/* context={products} */}
    </div>
  );
}
