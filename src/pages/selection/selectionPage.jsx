import React, { useState } from 'react';
import Menu from '../../components/burgerMenu/menu';
import Logo from '../../components/burgerMenu/logo';
import BarPlayer from '../../components/barPlayer/barPlayer';
import Search from '../../components/search/search';
import Personal from '../../components/personal/personal';
import s from '../../style/style.module.css';
import PlaylistColl from '../../components/playlist/playlist-collections';
import { useGetAllTracksQuery } from '../../store/api/musicApi';

export const SelectionPage = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [isLoad] = useState(true); 

  const {data = [], isLoading} = useGetAllTracksQuery();
  if (isLoading) return <h1>Loading...</h1>
  
  let TRACKS = data;

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
            <PlaylistColl/>
          </div>
          <div className={s.sidebar}>
            <Personal/>
           
          </div>
        </main>
        <BarPlayer
         loading={isLoad} 
         tracks = {TRACKS} 
         />
        </div>
    )
}