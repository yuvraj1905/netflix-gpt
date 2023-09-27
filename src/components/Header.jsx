import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { ppLetterCalculator } from "../utils/helperFunctions";
import { logo } from "../utils/constants";
import { auth } from "../utils/firebase";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const user = useSelector((store) => store.user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out Successfully !");
      })
      .catch((error) => {
        console.log("couldn't log out. error - " + error);
      });
  };

  return (
    <div className="fixed flex justify-between w-screen h-[12vh]  px-5 py-1 z-10 brightness-100 items-center  opacity-80">
      <img className="h-full" src={logo} alt="" />
      {user && (
        <section className="flex w-[10%] gap-2 relative items-center flex-shrink-0 flex-grow-0 text-white font-semibold">
          <p className="rounded-md bg-[#9B1F2E] py-1 px-2 font-bold min-w-[2rem] text-center">
            {ppLetterCalculator(user.displayName).slice(0, 2)}
          </p>
          <span
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <p>{user?.displayName?.split(" ")[0]}</p>
            {showDropDown ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
          </span>
          <button
            onClick={signOutHandler}
            className={`w-[95%] cursor-pointer border text-center p-1 z-20 absolute bottom-[-2.5rem] ${
              !showDropDown ? "hidden" : ""
            }`}
          >
            Sign out
          </button>
        </section>
      )}
    </div>
  );
};

export default Header;
