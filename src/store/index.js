import { configureStore } from "@reduxjs/toolkit";
import playlistsReducer from "./reducers/playlists"
import userSlice from "./slices/userSlice"

export const store = configureStore ({
    reducer: {
        playlists: playlistsReducer,
        user: userSlice,
    },
   
})