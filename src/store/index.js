import { configureStore } from "@reduxjs/toolkit";
import allplaylistsReducer from "./reducers/alltrackReducer"
import userReducer from "./slices/userSlice"

export const store = configureStore ({
    reducer: {
        tracks: allplaylistsReducer,
        user: userReducer,
    },
   
})