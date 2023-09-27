import React from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white gap-2 pb-3 pt-3">
      <p className="text-xl font-bold">© Yuvraj Kumar</p>
      <span className="flex gap-4 items-center">
        <a href="https://www.linkedin.com/in/yuvraj1905/">
          <AiFillLinkedin size={40} />
        </a>
        <a href="https://github.com/yuvraj1905">
          <FaGithubSquare size={37} />
        </a>
        <a href="https://twitter.com/yuvrajt1905">
          <AiFillTwitterSquare size={40} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
