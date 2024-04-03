import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PigPalLogo from "../assets/pigpallogo.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
        }),
      });
      if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error: ${response.status}, ${message}`);
      }
      const data = await response.json();
      console.log(data);

      navigate("/home");
    } catch (error) {
      console.error("Failed to register user:", error);
      alert("Failed to register. Please try again.");
    }
  };
  return (
    <div className="flex flex-col max-h-screen">
      <div className="h- flex items-center justify-center">
        <Link
          to="/"
          className="font-outfit text-5xl text-light-pink pl-2 border-b-2 border-light-pink"
          style={{ paddingBottom: "0.4rem", width: "calc(100% - 4rem)" }}
        >
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
            <form className="w-96" onSubmit={handleSubmit}>
              <label
                htmlFor="username"
                className="block text-sm text-light-pink font-outfit font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink mb-4"
              />
              {/* Email input */}
              <label
                htmlFor="email"
                className="block text-sm text-light-pink font-outfit font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink mb-4"
              />
              {/* Password input */}
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
                value={user.password}
                onChange={handleChange}
                className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink mb-4"
              />
              {/* Confirm Password input */}
              <label
                htmlFor="confirm-password"
                className="block text-sm text-light-pink font-outfit font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 pl-4 w-full border border-light-pink rounded-3xl font-semibold focus:outline-light-pink mb-4"
              />
              {/* Submit button */}
              <button
                type="submit"
                className="bg-light-pink text-off-white p-2.5 rounded-3xl w-1/2 ml-24 font-semibold hover:bg-mono-red mt-1"
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

export default SignupPage;
