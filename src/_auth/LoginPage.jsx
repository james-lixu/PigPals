import React from "react";
import { Link } from "react-router-dom";
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
      <div className="flex flex-col max-h-screen items-center justify-center pt-24">
        <div className="flex items-center">
          <img src={PigPalLogo} alt="PigPal Logo" className="mr-8 w-full" />

          <div className="p-8 rounded-lg border-none mt-14">
            <h2 className="text-2xl mb-4 text-light-pink font-outfit font-semibold">
              Sign in
            </h2>
            <form className="w-96">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-light-pink font-outfit font-semibold"
                >
                  Username
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border border-light-pink rounded-3xl font-semibold"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm text-light-pink font-outfit font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border border-light-pink rounded-3xl font-semibold"
                />
              </div>
              <button
                type="submit"
                className="bg-light-pink text-black p-2.5 rounded-3xl w-1/2 ml-24 font-bold"
              >
                Login
              </button>
            </form>
            <p className="mt-4 font-outfit font-semibold">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-blue hover:text-darker-blue">
                Sign up here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
