import React from 'react';
import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../../store/api/musicApi';


const PlaylistMain = () => {

  const {data = []} = useGetAllTracksQuery();

  const playlistItems = data.map((item) => (
    <PlaylistItem
      key={item.id}
      track={item}
    />
  ));
  
  return (
    <div>
      <ul>{playlistItems}</ul>
    </div>
  );
};

export default PlaylistMain;