import React from 'react';
// import PlaylistItem from './playlistItem';
import { useGetTracksQuery } from '../../store/api/selectionApi';
import PlaylistItem from './playlistItem';


const PlaylistColl = () => {

  const {data = [], isLoading} = useGetTracksQuery();

  if (isLoading) return <h1>Loading...</h1>
  console.log(data.items)

  const playlistItems = data.items.map((item) => (
    <PlaylistItem
      key={item.id}
      track={{
        id: item.id,
        title: item.name,
        author: item.author,
        album: item.album,
        time: (item.duration_in_seconds / 60).toFixed(2),
      }}
    />
  ));

  return (
    <div>
      <ul>{playlistItems}</ul> 
    </div>
  );
};

export default PlaylistColl;