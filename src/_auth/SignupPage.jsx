import React from "react";
import { Link } from "react-router-dom";
import PigPalLogo from "../assets/pigpallogo.png";

const LoginPage = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <div className="h- flex items-center justify-center">
      <Link to="/" className="font-outfit text-5xl text-light-pink pl-2 border-b-2 border-light-pink" style={{ paddingBottom: "0.4rem", width: "calc(100% - 4rem)" }}>
        PigPals
      </Link>
      </div>
      <div className="flex flex-col max-h-screen items-center justify-center pt-8">
        <div className="flex items-center">
          <img src={PigPalLogo} alt="PigPal Logo" className="mr-8 w-full" />

          <div className="p-8 rounded-lg border-none mt-14">
            <h2 className="text-2xl mb-4 text-light-pink font-outfit font-semibold">
              Sign up
            </h2>
            <form className="w-96">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm text-light-pink font-outfit font-semibold"
                >
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm text-light-pink font-outfit font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink"
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
                  className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-sm text-light-pink font-outfit font-semibold">
                  Confirm Password
                </label>
                <input type="password" id="confirm-password" name="confirm-password" className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink"/>
              </div>
              <button
                type="submit"
                className="bg-light-pink text-off-white p-2.5 rounded-3xl w-1/2 ml-24 font-semibold hover:bg-mono-red"
              >
                Register
              </button>
            </form>
            <p className="mt-4 font-outfit font-semibold">
              Already have an account?{" "}
              <Link to="/login" className="text-blue hover:text-darker-blue">
                Sign in here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
