import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists } from '../../store/actions/playlistsActions';


const PlaylistsPage = ({ match }) => {
  const dispatch = useDispatch();
  const { playlists, loading, error } = useSelector((state) => state.playlists);

  useEffect(() => {
    dispatch(fetchPlaylists(match.params.id));
  }, [dispatch, match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h2>{playlist.name}</h2>
          <p>Owner: {playlist.owner}</p>
          <ul>
            {playlist.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.author}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlaylistsPage;