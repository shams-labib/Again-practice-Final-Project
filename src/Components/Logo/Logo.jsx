import React from "react";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to={"/"} className="flex items-end justify-center">
        <img src={logoImg} alt="" />
        <p className="text-3xl font-bold -ms-2.5">zap shift</p>
      </Link>
    </div>
  );
};

export default Logo;
