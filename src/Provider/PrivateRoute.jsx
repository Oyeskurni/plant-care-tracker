import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // যদি user logged in না থাকে, login page এ পাঠাবে
    return <Navigate to="/login" replace />;
  }

  // logged in হলে children render হবে
  return children;
};

export default PrivateRoute;
