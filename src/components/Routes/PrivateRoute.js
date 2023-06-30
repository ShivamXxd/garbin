import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
// import Login from "../Userauth/Login";

function PrivateRoute() {
  // const { currentUser } = useAuth();
  return <Navigate to="/" />;
}

export default PrivateRoute;
