import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <div className="relative w-screen h-screen">
      <Header />
      <img
        className="brightness-[50%] w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <form className="absolute w-1/4 flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-80 gap-10 rounded-md font-bold p-12 text-white justify-between">
        <h2 className="text-4xl">Sign {isLoginPage ? "In" : "Up"}</h2>
        <span className="flex flex-col gap-4">
          {!isLoginPage && (
            <input
              className="p-3 text-black font-semibold border-none outline-none text-xs rounded-[0.2rem] bg-[#E8F0FE]"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="p-3 text-black font-semibold border-none outline-none text-xs rounded-[0.2rem] bg-[#E8F0FE]"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-3 text-black font-semibold border-none outline-none text-xs rounded-[0.2rem] bg-[#E8F0FE]"
            type="password"
            placeholder="Password"
          />
        </span>
        <button className="bg-[#E50914] p-2">Sign In</button>
        <p className="text-sm text-stone-500">
          {isLoginPage ? "New to Netflix? " : "Already member? "}{" "}
          <span
            onClick={() => setIsLoginPage(!isLoginPage)}
            className="text-stone-200 cursor-pointer"
          >
            Sign {isLoginPage ? "up" : "in"} now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
