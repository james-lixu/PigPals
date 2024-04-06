import React from "react";
import NavBar from "../components/Navbar.jsx";
import PiggyBankImage from "../assets/piggy-bank.png";

const HomePage = () => {
  return (
    <div className="flex-l w-full">
      <NavBar></NavBar>
      <div className="ml-8 mt-4">
        <h1>My Goals</h1>
        <ul className="list-disc">
          <li>Trip to Australia</li>
          <li>Rent cow for a day</li>
          <li>Adopt a cat</li>
        </ul>
        <img src={PiggyBankImage} alt="Piggy bank"></img>
      </div>
    </div>
  );
};

export default HomePage;
