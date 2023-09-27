import React from "react";
import Header from "./Header";
import BgTrailer from "./BgTrailer";
import Title from "./Title";
import { useSelector } from "react-redux";
import useFetchAllMovies from "../hooks/useFetchAllMovies";
import { listOfMovieTypes } from "../utils/constants";
import CategoryWiseMovies from "./CategoryWiseMovies";
import Footer from "./Footer";

const Browse = () => {
  useFetchAllMovies();
  const { Popular, TopRated, Upcoming, NowPlaying } = useSelector(
    (store) => store.movies
  );
  const arrOfMovieLists = [Popular, TopRated, Upcoming, NowPlaying];
  if (Popular?.length < 1) return;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative">
        <BgTrailer />
        <Title />
      </div>
      {/* secondary container after this */}
      <div className="bg-zinc-950  pb-8">
        <div className="flex flex-col gap-12  pl-12 relative -mt-48">
          {listOfMovieTypes.map((listname, i) => (
            <CategoryWiseMovies title={listname} data={arrOfMovieLists[i]} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
