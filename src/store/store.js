import { configureStore } from '@reduxjs/toolkit';
import playlists from "./reducers/playlists";
// import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    playlist: playlists,
  },
//   middleware: [thunk],
});