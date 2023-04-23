import React, { useState } from 'react';
import './style/app.css';
import PlaylistItem from './components/playlist/playlistItem';
import Search from './components/search/search';
import Sidebar from './components/sidebar/sidebar'
import Menu from './components/burgerMenu/menu';
import MainCenterblock from './components/centerblock/mainCenterblock';
import BarPlayer from './components/barPlayer/barPlayer';

function app() {
  const [menuActive, setMenuActive] = useState(false)
  const item = [{value:"Главное", href: "/main"}, {value:"Мои треки", href: "/mytrack"}, {value:"Войти", href: "/sign"}]
  return (
    <div className='app'>
      <div className="wrapper">
        <div className="container">
          <main className="main">
          <nav className="main__nav nav">
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
            
          </nav>
          <div className="main__centerblock centerblock">
          <Search/>
          <MainCenterblock/>
          <div className='playlist'>
            <PlaylistItem/>
            <PlaylistItem track={{title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
            <PlaylistItem track={{title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
            <PlaylistItem track={{title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
            <PlaylistItem track={{title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:412'}}/>
            <PlaylistItem track={{title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
            <PlaylistItem track={{title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
            <PlaylistItem track={{title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
            <PlaylistItem track={{title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
            <PlaylistItem track={{title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:412'}}/>
            <PlaylistItem track={{title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
          </div>
          </div>
          <div className="main__sidebar sidebar">
            {/* <userInfo/> */}
            <Sidebar/>
          </div>
      </main>
      <div><BarPlayer/></div>
      </div>
    </div>
      <Menu active={menuActive} setActive={setMenuActive} header={""} item={item}/>
   
    
</div>
  );
}

export default app;
