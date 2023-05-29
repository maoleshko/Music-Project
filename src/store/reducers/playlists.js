import { 
    FETCH_PLAYLISTS_REQUEST,
    FETCH_PLAYLISTS_SUCCESS, 
    FETCH_PLAYLISTS_FAILURE
} from "./types/playlist";



const initialState = {
    playlists: [],
    loading: false,
    error: null,
  };
  
  export default function playlistsReducer (state = initialState, action) {
    switch (action.type) {
      case FETCH_PLAYLISTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_PLAYLISTS_SUCCESS:
        return { ...state, playlists: action.payload, loading: false };
      case FETCH_PLAYLISTS_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };