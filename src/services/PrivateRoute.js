import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Component}) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const isAuthenticated = currentUser?.id ? true : false;

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
