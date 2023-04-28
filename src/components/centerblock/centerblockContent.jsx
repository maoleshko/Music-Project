import React from 'react';
import './centerblockContent.css';
import PlaylistItem from '../playlist/playlistItem';
import sprite from '../../img/icon/sprite.svg'

function CenterblockContent() {
  return (
    <div className="centerblock__content">
       <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref={`${sprite}#icon-watch`}></use>
            </svg>
          </div>
      </div>
      <div className='content__playlist playlist'>   
        <PlaylistItem track={{id: 1, title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
        <PlaylistItem track={{id: 2,title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
        <PlaylistItem track={{id: 3,title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
        <PlaylistItem track={{id: 4,title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:12'}}/>
        <PlaylistItem track={{id: 5,title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
        </div>
    </div>
    )
}

export default CenterblockContent;