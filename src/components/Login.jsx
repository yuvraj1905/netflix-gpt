import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidator } from "../utils/formValidator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgPrimary } from "../utils/constants";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const formClearer = () => {
    setErrMessage("");
    email.current.value = "";
    password.current.value = "";
    if (!isLoginPage) name.current.value = "";
  };

  const loginHandler = (e) => {
    const emailInput = email?.current?.value;
    const passwordInput = password?.current?.value;
    const nameInput = name?.current?.value;
    e.preventDefault();
    const err = formValidator(emailInput, passwordInput);
    if (err) {
      setErrMessage(err);
      return;
    } else {
      setErrMessage("");
    }

    if (!isLoginPage) {
      createUserWithEmailAndPassword(auth, emailInput, passwordInput)
        .then((userCredential) => {
          formClearer();
          setIsLoginPage(true);
          toast.success("Sign up Successful! Log in now");
          updateProfile(userCredential.user, {
            displayName: nameInput,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailInput, passwordInput)
        .then((userCredential) => {
          formClearer();
          toast.success("Logged in Successfully !");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <Header />
      <img
        className="brightness-[50%] w-full h-full object-cover"
        src={bgPrimary}
        alt=""
      />
      <form
        onSubmit={loginHandler}
        className="absolute w-1/4 flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-80 gap-10 rounded-md font-bold p-12 text-white justify-between"
      >
        <h2 className="text-4xl">Sign {isLoginPage ? "In" : "Up"}</h2>
        <span className="flex flex-col gap-4">
          {!isLoginPage && (
            <input
              ref={name}
              className="p-3 text-black font-semibold border-none outline-none text-xs rounded-[0.2rem] bg-[#E8F0FE]"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="p-3 text-black font-semibold border-none outline-none text-xs rounded-[0.2rem] bg-[#E8F0FE]"
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-3 text-black font-semibold border-none outline-none text-xs rounded-[0.2rem] bg-[#E8F0FE]"
            type="password"
            placeholder="Password"
          />
        </span>
        {errMessage && <small className="text-[#E50914]">{errMessage}</small>}{" "}
        <button type="submit" className="bg-[#E50914] p-2">
          Sign In
        </button>
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
