import React from "react";
import Header from "./Header";

import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const togglesignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="Netflix-bg-image"
        />
      </div>

      <form className="w-full md:w-3/12 absolute p-8 bg-black my-36 mx-auto right-0 left-0 rounded-sm opacity-80">
        <h1 className="py-4 mx-3 text-4xl text-white font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="m-2 py-4 px-2 w-full border border-white text-white bg-black rounded-sm"
          />
        )}
        <button className="m-2 py-3 w-full text-white bg-red-700 rounded-sm font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p
            className="text-white m-2 py-2 w-full cursor-pointer"
            onClick={togglesignUp}
          >
            New to Netflix?Sign up now
          </p>
        ) : (
          <p
            className="text-white m-2 py-2 w-full cursor-pointer"
            onClick={togglesignUp}
          >
            Already Registered?Sign in now!
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
