import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PigPalLogo from "../assets/pigpallogo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with credentials:", credentials);

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      console.log(`Response status: ${response.status}`);

      if (!response.ok) {
        // Assuming all error responses are in JSON format.
        const errorBody = await response.json();
        console.error("Login failed:", errorBody);
        alert(`Login failed: ${errorBody.message || "Unknown error"}`);
        return;
      }

      // Assuming a successful response is also in JSON format.
      const data = await response.json();
      console.log("Login successful:", data);

      // Navigate to "/home" upon successful login.
      navigate("/home");
    } catch (error) {
      console.error("Network error or CORS issue on login request:", error);
      alert("Login request failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-20 flex items-center justify-center">
        <Link
          to="/"
          className="font-outfit text-5xl text-light-pink pl-2 border-b-2 border-light-pink"
          style={{ paddingBottom: "0.4rem", width: "calc(100% - 4rem)" }}
        >
          PigPals
        </Link>
      </div>
      <div className="flex flex-col max-h-screen items-center justify-center pt-24">
        <div className="flex items-center">
          <img src={PigPalLogo} alt="PigPal Logo" className="mr-8 w-full" />
          <div className="p-8 rounded-lg border-none mt-14">
            <h2 className="text-2xl mb-4 text-light-pink font-outfit font-semibold">
              Sign in
            </h2>
            <form className="w-96" onSubmit={handleSubmit}>
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
                  value={credentials.email}
                  onChange={handleChange}
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
                  value={credentials.password}
                  onChange={handleChange}
                  className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink"
                />
              </div>
              <button
                type="submit"
                className="bg-light-pink text-off-white p-2.5 rounded-3xl w-1/2 ml-24 font-semibold hover:bg-mono-red"
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
