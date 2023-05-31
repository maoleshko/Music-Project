import { configureStore } from "@reduxjs/toolkit";
import allplaylistsReducer from "./reducers/alltrackReducer"
import userSlice from "./slices/userSlice"

export const store = configureStore ({
    reducer: {
        tracks: allplaylistsReducer,
        user: userSlice,
    },
   
})