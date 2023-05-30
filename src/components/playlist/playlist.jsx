// import React, { useState, useEffect } from 'react';
// import PlaylistItem from './playlistItem';

// function Playlist() {
//     const [tracks, setTracks] = useState([]);

//     useEffect(() => {
//         fetch('https://painassasin.online/catalog/track/all/')
//           .then(response => response.json())
//           .then(data => setTracks(data))
//           .catch(error => console.error(error));
//       }, []);
  
//     return (
//       <div>
//         {tracks.map(track => (
//           <PlaylistItem
//             key={track.id}
//             track={{
//               id: track.id,
//               title: track.name,
//               author: track.author,
//               album: track.album,
//               time: (track.duration_in_seconds/60).toFixed(2)

//             }}
//           />
//         ))}
//       </div>
//     );
//   }

//   export default Playlist;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlaylistItem from './playlistItem';
import { fetchTracks } from '../../store/actions/trackActions';

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
      <h2>Playlist</h2>
      <ul>{playlistItems}</ul>
    </div>
  );
};

export default Playlist;