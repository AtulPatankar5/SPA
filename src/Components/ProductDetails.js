import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams(); // to take parameter in component from URL
  // const pobj=useOutletContext();// help get data from context
  const pobj = useLocation(); // state is fetched using uselocation() and <Outlet/> is also required for this 
  return (
    <div className="prodDetailContainer">
      <div className="imgContainer">
        <img src={pobj.state.img} />
        {/* {pobj.state.pname} */}
      </div>
      <div className="details">
        <h2>
          {pobj.state.pname} @ Rs {pobj.state.price}
        </h2>
        <h3>Shipping : {pobj.state.shipping}</h3>
      </div>
      {/* <h1>Product Details {id}</h1> */}
      {/* <h1>{}</h1> */}
      {/* <h2>{JSON.stringify(pobj[id-1])}</h2> */}
      {/* <h2>{JSON.stringify(pobj.state)}</h2> */}
    </div>
  );
}
