import React from "react";
import NavBar from "../components/Navbar.jsx";
import PiggyBankImage from "../assets/piggy-bank.png"

const HomePage = () => {
  return (
    <div className="flex-l w-full">
      <NavBar></NavBar>
      <div className="flex max-w-100">
        <img src={PiggyBankImage} alt="Piggy bank"></img>
      </div>
    </div>
  );
};

export default HomePage;
