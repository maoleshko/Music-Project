import React from 'react';
import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../../store/api/musicApi';


const PlaylistFavor = () => {

  const {data = []} = useGetAllTracksQuery();

  const userId = Number(localStorage.getItem('user_id'));

const starredList = data.filter(item => {
  return item.stared_user.find(user => user.id === userId);
});


const playlistItems = starredList.map((item) => (
  <PlaylistItem
      key={item.id}
      track={item}
    />
    ));
  return (
      <div>
       <ul>{playlistItems}</ul>
     </div>
  )
};

export default PlaylistFavor;