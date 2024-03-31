import React from "react";
import PigPalLogo from "../assets/pigpallogo.png";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-20 flex items-center justify-center">
        <h1
          className="font-outfit text-5xl text-light-pink pl-2 border-b-2 border-light-pink"
          style={{ paddingBottom: "0.4rem", width: "calc(100% - 4rem)" }}
        >
          PigPals
        </h1>
      </div>
      <div className=" m-36 pl-48">
        <img src={PigPalLogo} className="h-1/4 w-1/3"></img>
      </div>
    </div>
  );
};

export default LoginPage;
