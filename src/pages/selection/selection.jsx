import React, { useState } from 'react';
// import CenterblockContent from '../../components/centerblock/centerblockContent'
import Menu from '../../components/burgerMenu/menu';
import Logo from '../../components/burgerMenu/logo';
import BarPlayer from '../../components/barPlayer/barPlayer';
import Search from '../../components/search/search';
import Personal from '../../components/personal/personal';
// import PlaylistsPage from '../../components/playlist/playlistPage'
import s from '../../style/style.module.css';

export const Selection = () => {
    const [menuActive, setMenuActive] = useState(false)

   return (
        <div>
            <main className={s.main}>
          <nav className={s.nav}>
            <Logo/>
            <div className={s.burger_btn} onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={""} />
          </nav>    
          <div className={s.centerblock}>
            <Search/>
            <h2 className={s.h2}>Заголовок подборки</h2> 
            
            {/* <CenterblockContent/> */}
            {/* <PlaylistsPage/> */}
          </div>
          <div className={s.sidebar}>
            <Personal/>
           
          </div>
        </main>
        <BarPlayer/>
        </div>
    )
}