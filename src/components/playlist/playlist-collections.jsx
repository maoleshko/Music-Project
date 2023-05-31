import React from 'react';
// import PlaylistItem from './playlistItem';
import { useGetTracksQuery } from '../../store/api/selectionApi';


const PlaylistColl = () => {

  const {data = [], isLoading} = useGetTracksQuery();

  if (isLoading) return <h1>Loading...</h1>

//   const playlistItems = tracks.map((track) => (
//     <PlaylistItem
//       key={track.id}
//       track={{
//         id: track.id,
//         title: track.name,
//         author: track.author,
//         album: track.album,
//         time: (track.duration_in_seconds / 60).toFixed(2),
//       }}
//     />
//   ));

  return (
    <div>
      <ul>
      {data.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
        </ul>
    </div>
  );
};

export default PlaylistColl;