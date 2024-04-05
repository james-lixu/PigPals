import React from "react";
import NavBar from "../components/Navbar.jsx";
import LeftPig from "../assets/left-pig.jpg";
import RightPig from "../assets/right-pig.jpg";

const HomePage = () => {
  return (
    <div className="flex-l w-full">
      <NavBar></NavBar>
      <div className="flex max-w-100">
        <img src={LeftPig}></img>
        <img src={RightPig}></img>
      </div>
    </div>
  );
};

export default HomePage;
