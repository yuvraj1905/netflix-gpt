import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Title = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full aspect-video bg-gradient-to-r from-black px-12 text-white flex flex-col items-left justify-center gap-8 ">
      {/* <h2 className="text-6xl w-[25%] font-bold line-clamp-1">Elemental</h2> */}
      <img
        className="w-[30%] "
        src="https://res.cloudinary.com/yuvraj1905/image/upload/v1695718249/pixar_elemental_logo_png_by_docbuffflash82_df7m3hk-fullview_okzj4v.png"
        alt=""
      />
      <p className="line-clamp-4 w-[28%] font-semibold text-lg">
        In a city where fire, water, land, and air residents live together, a
        fiery young woman and a go-with-the-flow guy discover something
        elemental: how much they actually have in common.
      </p>
      <span className="flex gap-4 ">
        <button className="px-5 py-[0.35rem] gap-2 rounded-sm bg-white text-black font-semibold flex items-center text-2xl hover:bg-stone-200">
          <FaPlay />
          Play
        </button>
        <button className="px-5 py-[0.35rem] gap-2 rounded-sm bg-[#554B4A] hover:bg-stone-500 text-white font-semibold flex items-center opacity-80 text-2xl ">
          <AiOutlineInfoCircle />
          <span>More info</span>
        </button>
      </span>
    </div>
  );
};

export default Title;
