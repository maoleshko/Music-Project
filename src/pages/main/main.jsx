
import React, { useState } from 'react';
import s from '../../style/style.module.css';
import Filter from '../../components/filter/filter';
import Personal from '../../components/personal/personal';
import SidebarBlock from '../../components/sidebar/sidebarBlock';
import Menu from '../../components/burgerMenu/menu';
import Logo from '../../components/burgerMenu/logo';
import BarPlayer from '../../components/barPlayer/barPlayer';
import { useGetAllTracksQuery } from '../../store/api/musicApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilterInp} from '../../store/slices/setFilters';
import {useTrack} from "../../hooks/use-track"
import sprite from '../../img/icon/sprite.svg'
import PlaylistItem from '../../components/playlist/playlistItem';

export const Main = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [isLoad] = useState(true); 
  const dispatch = useDispatch()
  const {id} = useTrack();

  const {data = [], isLoading} = useGetAllTracksQuery();

  const filterAuthor = useSelector(state => state.setFilters.author);
  const filterGenre = useSelector(state => state.setFilters.genre);
  const filterYears = useSelector(state => state.setFilters.years);
  const filterSerchInp = useSelector(state => state.setFilters.serchInp);

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
    if (filterSerchInp.length > 0) {

      TRACKS = TRACKS.filter(({ name }) => name.toLowerCase().includes(filterSerchInp.toLowerCase()))
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

          <div className={s.search}>
                <svg className={s.svg}>
                  <use xlinkHref={`${sprite}#icon-search`}></use>
                </svg>
                <input 
                onInput={(event) => {
                  const target = event.target.value
                  dispatch(setFilterInp({
                      serchInp: target, 
                                
                  })); 
                  console.log(target)           
              }}
                className={s.text} 
                type="search" 
                placeholder="Поиск" 
                name="search"/>
              </div>

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
      {TRACKS.length === 0 ? '' : 
                            TRACKS.map((track) => (
                                <PlaylistItem key={track.id} track={track} loading={isLoad} titleTrack={track.name} titleSpan={track.titleSpan} author={track.author}
                                    album={track.album}
                                    time={track.duration_in_seconds}                                    
                                />
                            ))}
        </div>
    </div>
          </div>
          <div className={s.sidebar}>
            <Personal/>
            <SidebarBlock
              loading={isLoad} 
              tracks = {TRACKS} 
            />
          </div>
        </main>
        <div>
        {id ? 
          <BarPlayer
            loading={isLoad} 
            tracks = {TRACKS}                 
            /> : ''}    
        </div>
        
      </div>
    )
}