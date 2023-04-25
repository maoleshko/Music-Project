import React, { useState } from 'react';
import './style/app.css';
import Search from './components/search/search';
import Filter from './components/filter/filter';
import CenterblockContent from './components/centerblock/centerblockContent';
import Personal from './components/personal/personal';
import SidebarBlock from './components/sidebar/sidebarBlock';
import Menu from './components/burgerMenu/menu';
import BarPlayer from './components/barPlayer/BarPlayer';




function App() {
  const [menuActive, setMenuActive] = useState(false)
  const item = [{id: 1, value:"Главное", href: "/main"}, {id: 2,value:"Мои треки", href: "/mytrack"}, {id: 3,value:"Войти", href: "/sign"}]
  return (
    <div className='app'>   
      <div className="wrapper">
        <div className="container">
          <main className="main">
          <nav className="main__nav nav">
          <div className="nav__logo logo"></div>
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
          </nav>
          <div className="main__centerblock centerblock">
          <Search/>
          <h2 className="centerblock__h2">Треки</h2>
          <Filter/>          
          <CenterblockContent/>
         
          </div>
          <div className="main__sidebar sidebar">
            <Personal/>
            <SidebarBlock/>
          </div>
      </main>
      <BarPlayer/>
      <footer/>
      </div>
    </div>
      <Menu active={menuActive} setActive={setMenuActive} header={""} item={item}/>    
</div>
  );
}

export default App;
