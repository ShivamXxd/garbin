import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
// import Login from "../Userauth/Login";

function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
