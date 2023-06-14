
import React, { useState } from 'react';
import s from '../../style/style.module.css';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';
// import CenterblockContent from '../../components/centerblock/centerblockContent';
import Personal from '../../components/personal/personal';
import SidebarBlock from '../../components/sidebar/sidebarBlock';
import Menu from '../../components/burgerMenu/menu';
import Logo from '../../components/burgerMenu/logo';
import BarPlayer from '../../components/barPlayer/barPlayer';
import { useGetAllTracksQuery } from '../../store/api/musicApi';
import { useSelector } from "react-redux";
import sprite from '../../img/icon/sprite.svg'
import Playlist from '../../components/playlist/playlist-mail';


export const Main = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [isLoad] = useState(true); 

  const {data = [], isLoading} = useGetAllTracksQuery();

  const filterAuthor = useSelector(state => state.setFilters.author);
  const filterGenre = useSelector(state => state.setFilters.genre);
  const filterYears = useSelector(state => state.setFilters.years)

  if (isLoading) return <h1>Loading...</h1>
  
  let TRACKS = data;

  switch (filterYears) {
    case 'Сначала новые': TRACKS = TRACKS.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(adate).valueOf()) - (new Date(bdate).valueOf()));   
        break;
        case 'Сначала старые':TRACKS = TRACKS.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(bdate).valueOf()) - (new Date(adate).valueOf()))            
        break;
    default:
        break;
}

    if ( filterAuthor.length > 0) {

        TRACKS = TRACKS.filter(({ author }) => filterAuthor.includes(author))
    } 
    if (filterGenre.length > 0) {

        TRACKS = TRACKS.filter(({ genre }) => filterGenre.includes(genre))
    }
        
    return (  
      <div className={s.container}>
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
            <h2 className={s.h2}>Треки</h2> 
            <Filter 
            traks={TRACKS}
            />        
            <div className={s.content}>
       <div className={s.content_title}>
          <div className={s.title_track} >Трек</div>
          <div className={s.title_author}>ИСПОЛНИТЕЛЬ</div>
          <div className={s.title_album}>АЛЬБОМ</div>
          <div className={s.title_time}>
            <svg className={s.time_svg} alt="time">
              <use xlinkHref={`${sprite}#icon-watch`}></use>
            </svg>
          </div>
      </div>
      <div className={s.playlist}>   
      <Playlist 
       key={TRACKS.id}
       track={TRACKS}
       loading={isLoad}
       />
        </div>
    </div>
          </div>
          <div className={s.sidebar}>
            <Personal/>
            <SidebarBlock/>
          </div>
        </main>
        <BarPlayer
         loading={isLoad} 
         tracks = {TRACKS} 
         />
      </div>
    )
}