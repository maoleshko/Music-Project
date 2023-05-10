import React, { useState, useEffect } from 'react';
import PlaylistItem from './playlistItem';

function Playlist() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch('https://painassasin.online/catalog/track/all/')
          .then(response => response.json())
          .then(data => setTracks(data))
          .catch(error => console.error(error));
      }, []);
  
    return (
      <div>
        {tracks.map(track => (
          <PlaylistItem
            key={track.id}
            track={{
              id: track.id,
              title: track.name,
              author: track.author,
              album: track.album,
              time: track.duration_in_seconds

            }}
          />
        ))}
      </div>
    );
  }

  export default Playlist;