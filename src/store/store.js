import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import {musicApi} from './api/musicApi'
import {userApi} from './api/userApi'
import currentTrackReducer from "./slices/setTracks";
import setFiltersReducer from './slices/setFilters'

export const store = configureStore ({
    reducer: {
        user: userReducer,
        [musicApi.reducerPath]: musicApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        currentTrack: currentTrackReducer,
        setFilters: setFiltersReducer,
        
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat([userApi.middleware, musicApi.middleware]),
})