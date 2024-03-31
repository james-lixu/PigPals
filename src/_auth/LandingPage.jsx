import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TwoSittingPigs from "../assets/two-sitting-pigs.png";

const LandingPage = () => {
  const navigate = useNavigate();

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
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <img
          src={TwoSittingPigs}
          alt="Two cute pigs sitting down"
          className="max-w-xs w-full mb-8"
        />
        <h1 className="text-3xl font-bold mb-6">Welcome to PigPals!</h1>
        <p className="mb-4">
          Whether you're saving for a rainy day, a sunny vacation, or the future
          of your dreams, PigPals is here to make each penny count.
        </p>
        <p className="mb-4">
          <strong>Easy. Fun. Effective!</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Track Your Spending:</strong> Keep your finances in check
            with our easy-to-use tools.
          </li>
          <li>
            <strong>Set Goals:</strong> Whether it's a small treat or a big
            investment, set your sights high.
          </li>
        </ul>
        <button
          className="bg-mono-red font-outfit text-off-white p-2.5 rounded"
          onClick={() => navigate("/login")}
        >
          Click me to get started!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
