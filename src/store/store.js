import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import {musicApi} from './api/musicApi'
import {userApi} from './api/userApi'
import currentTrackReducer from "./slices/setTracks";

export const store = configureStore ({
    reducer: {
        user: userReducer,
        [musicApi.reducerPath]: musicApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        currentTrack: currentTrackReducer,
        
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat([userApi.middleware, musicApi.middleware]),
})