import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlaylistItem from './playlistItem';
import { fetchTracks } from '../../store/actions/creators/AlltrackActions';

const Playlist = () => {
  const tracks = useSelector((state) => state.tracks.tracks);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  const playlistItems = tracks.map((track) => (
    <PlaylistItem
      key={track.id}
      track={{
        id: track.id,
        title: track.name,
        author: track.author,
        album: track.album,
        time: (track.duration_in_seconds / 60).toFixed(2),
      }}
    />
  ));

  return (
    <div>
      <ul>{playlistItems}</ul>
    </div>
  );
};

export default Playlist;