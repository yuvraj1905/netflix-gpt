import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, movieListCdn } from "../utils/constants";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchAllMovies = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const movieListTitles = ["now_playing", "popular", "top_rated", "upcoming"];
  const listOfApiCalls = movieListTitles.map((title) =>
    fetch(movieListCdn + title, API_OPTIONS).then((res) => res.json())
  );
  const getAllMovies = async () => {
    try {
      const fullData = await Promise.all(listOfApiCalls);
      dispatch(addMovies(fullData));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user?.displayName) {
      getAllMovies();
    }
  }, [user]);
};

export default useFetchAllMovies;
