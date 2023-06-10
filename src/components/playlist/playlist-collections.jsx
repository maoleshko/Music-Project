import React from 'react';
import PlaylistItem from './playlistItem';
import { useGetSelectMusicQuery } from '../../store/api/musicApi';
import s from '../../style/style.module.css';

const PlaylistColl = () => {

let url = window.location.href;
let id = url.split('/').pop(); // получаем последний элемент из массива, содержащего разделенные по '/' элементы URL

// присваиваем заголовок в зависимости от значения Id
  let title;
  switch (id) {
    case '1':
      title = 'Плейлист дня';
      break;
    case '2':
      title = '100 танцевальных хитов';
      break;
    case '3':
      title = 'Инди-заряд';
      break;
    default:
      title = 'Заголовок подборки';
  }

  const {data = [], isLoading} = useGetSelectMusicQuery(id);


  if (isLoading) return <h1>Loading...</h1>
  
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

//   


  return (
    <div>
      {/* Заголовой подборки title нужно принять при выборе подборки при клике на сообвествующий объект по id */}
      <h2 className={s.h2}>{title}</h2> 
      <ul>{playlistItems}</ul> 
    </div>
  );
};

export default PlaylistColl;