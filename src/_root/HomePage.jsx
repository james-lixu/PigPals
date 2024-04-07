import React from "react";
import NavBar from "../components/Navbar.jsx";
import PiggyBankImage from "../assets/big-pig.png";

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="flex-l w-full">
        <div className="ml-8 mt-4">
          <h1>My Goals</h1>
          <ul className="list-disc">
            <li>Trip to Australia</li>
            <li>Rent cow for a day</li>
            <li>Adopt a cat</li>
          </ul>
          <img src={PiggyBankImage} alt="Piggy bank" className="w-1/4"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
