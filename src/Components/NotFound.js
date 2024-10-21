import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // navigate("/");// goes to home page when the url is not found within 1 sec
      navigate(-1); // moves to previous link automatically
    }, 1000);
  });
  
  return (
    <div>
      {/* <Navigate to="/" /> */}
      <h1>Not Found</h1>
    </div>
  );
}
