import { configureStore } from "@reduxjs/toolkit";
import allplaylistsReducer from "./reducers/alltrackReducer"
import userReducer from "./slices/userSlice"
import {trackSelections} from './api/selectionApi'

export const store = configureStore ({
    reducer: {
        tracks: allplaylistsReducer,
        user: userReducer,
        [trackSelections.reducerPath]: trackSelections.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(trackSelections.middleware)
})