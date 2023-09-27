import React from "react";
import MovieCard from "./MovieCard";

const CategoryWiseMovies = ({ title, data }) => {
  return (
    <div className="text-white flex flex-col gap-4 overflow-x-scroll scrollHide">
      <h2 className="font-semibold text-3xl">{title}</h2>
      <div className="w-screen flex gap-2 mb-2">
        {data?.map((movie) => (
          <MovieCard details={movie} />
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseMovies;
