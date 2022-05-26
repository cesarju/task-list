import React from "react";
import img from "../img/bg-desktop-light.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="w-full" src={img} alt="fondo" />
      </div>
      <h1 className="relative -top-64 -right-1/3 text-6xl text-white">TODO</h1>
    </div>
  );
};

export default Header;
