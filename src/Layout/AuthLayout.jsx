import React from "react";
import { Outlet } from "react-router";
import AuthImg from "../assets/authImage.png";
import Logo from "../Components/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex items-start">
        <Logo></Logo>
      </div>
      <div className="flex items-center min-h-screen">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 ">
          <img src={AuthImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
