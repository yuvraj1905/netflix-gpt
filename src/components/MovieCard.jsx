import React from "react";
import { moviePosterCdn } from "../utils/constants";

const MovieCard = ({ details }) => {
  return (
    <>
      <img
        className="w-[11%] rounded-md"
        src={moviePosterCdn + details.poster_path}
        alt=""
      />
    </>
  );
};

export default MovieCard;
