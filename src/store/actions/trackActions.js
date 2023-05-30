import axios from 'axios';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

const apiUrl = 'https://painassasin.online/catalog/track/all/';

export const fetchTracks = () => {
  return (dispatch) => {
    dispatch(fetchTracksRequest());
    axios
      .get(apiUrl)
      .then((response) => {
        const tracks = response.data;
        dispatch(fetchTracksSuccess(tracks));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchTracksFailure(errMsg));
      });
  };
};

export const fetchTracksRequest = () => {
  return {
    type: FETCH_TRACKS_REQUEST,
  };
};

export const fetchTracksSuccess = (tracks) => {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
  };
};

export const fetchTracksFailure = (errMsg) => {
  return {
    type: FETCH_TRACKS_FAILURE,
    payload: errMsg,
  };
};