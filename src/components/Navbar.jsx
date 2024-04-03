import React from "react";
import MenuIcon from "../assets/menu_icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-center">
      <Link
        to="/"
        className="font-outfit text-5xl text-light-pink pl-2 border-b-2 border-light-pink"
        style={{ paddingBottom: "0.4rem", width: "calc(100% - 4rem)" }}
      >
        PigPals
      </Link>
      <img src={MenuIcon}></img>
    </div>
  );
};

export default Navbar;
