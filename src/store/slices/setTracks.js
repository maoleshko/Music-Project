import { createSlice } from '@reduxjs/toolkit';

const initialState = {   
    track: {}
  };

const setTracks = createSlice({
  name: 'currentTrack',
    initialState,


  reducers: {   

    setCurrentTrack: (state, action) => {
      state.track = action.payload.track;     
    },


  },
});

export const {setCurrentTrack} = setTracks.actions;
export default setTracks.reducer;