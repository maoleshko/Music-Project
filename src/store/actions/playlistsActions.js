import { FETCH_PLAYLISTS_SUCCESS, 
    FETCH_PLAYLISTS_FAILURE
} from "./types/playlist";

export const fetchPlaylists = (id) => async (dispatch) => {
    try {
      const response = await fetch(`http://51.250.95.23:8000/catalog/selection/${id}`);
      const data = await response.json();
      dispatch({ type: FETCH_PLAYLISTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_PLAYLISTS_FAILURE, payload: error.message });
    }
  };