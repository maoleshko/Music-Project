export const getPlaylist = (id) => async (dispatch) => {
    try {
      const response = await fetch(`https://painassasin.online/catalog/selection/${id}`);
      const data = await response.json();
      dispatch({ type: 'GET_PLAYLIST_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_PLAYLIST_FAILURE', payload: error.message });
    }
  };