import React, { useState } from 'react';
import './style/App.css';
import PlaylistItem from "./components/Playlist/PlaylistItem";
import Search from './components/Search/search';
import Sidebar from './components/Sidebar'

import Menu from './components/burgerMenu/Menu';
import MainCenterblock from './components/centerblock/MainCenterblock';

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const item = [{value:"Главное", href: "/main"}, {value:"Мои треки", href: "/mytrack"}, {value:"Войти", href: "/sign"}]
  return (
    <div className='app'>
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
        <Search/>
      </nav>
      <main>
        <div className='main__centerblock'>
        <MainCenterblock/>
        <Sidebar/>
          <div className='Playlist'>
            <PlaylistItem track={{title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
            <PlaylistItem track={{title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
            <PlaylistItem track={{title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
            <PlaylistItem track={{title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:412'}}/>
            <PlaylistItem track={{title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
          </div>
        </div>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={""} item={item}/>
   
    
</div>
  );
}

export default App;
