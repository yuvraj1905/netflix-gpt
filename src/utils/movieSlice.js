import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "video",
  initialState: {
    Popular: [],
    TopRated: [],
    Upcoming: [],
    NowPlaying: [],
  },
  reducers: {
    addMovies(state, action) {
      state.NowPlaying = [...action.payload[0].results];
      state.Popular = [...action.payload[1].results];
      state.TopRated = [...action.payload[2].results];
      state.Upcoming = [...action.payload[3].results];
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
