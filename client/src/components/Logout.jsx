import React, { useEffect } from "react";
import { useGlobalContext } from "../store/auth";
import { Navigate } from "react-router-dom";
const Logout = () => {

  const { LogoutUser } = useGlobalContext();
  useEffect(()=>{
    LogoutUser();
  },[LogoutUser])
  return <Navigate to={'/login'} />
};

export default Logout;
