import React from 'react';
import PlaylistItem from './playlistItem';
import { useGetAllTracksQuery } from '../../store/api/musicApi';


const PlaylistFavor = () => {

  const {data = []} = useGetAllTracksQuery();

  //id пользователя можно получить из localStorage
  // const userId = localStorage.getItem('user_id');
  const userId = 21

const starredList = data.filter(item => {
  return item.stared_user.find(user => user.id === userId);
});
console.log(starredList)
const playlistItems = starredList.map((item) => (
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
  )




  
  

  // const playlistItems = data.map((item) => (
  //   <PlaylistItem
  //     key={item.id}
  //     track={{
  //       id: item.id,
  //       title: item.name,
  //       author: item.author,
  //       album: item.album,
  //       time: (item.duration_in_seconds / 60).toFixed(2),
  //     }}
  //   />
  // ));
  // return (
  //   
  // );
};

export default PlaylistFavor;