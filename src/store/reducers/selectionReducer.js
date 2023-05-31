const initialState = {
    playlist: [],
    error: null,
  };
  
  const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PLAYLIST_SUCCESS':
        return { ...state, playlist: action.payload };
      case 'GET_PLAYLIST_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default playlistReducer;