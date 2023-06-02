import React, {useState} from 'react';
import s from './playlistitem.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeleton/skeletonLoading';


const PlaylistItem = ({track}) => {

        const [isFavorite, setIsFavorite] = useState(false);
      
        const handleFavorite = () => {
          setIsFavorite(!isFavorite); // изменяем состояние избранного
      
          const favorites = JSON.parse(localStorage.getItem('favorites') || '[]'); // получаем текущий список избранных треков из локального хранилища
          if (isFavorite) {
            // если трек уже в избранном, удаляем его из списка
            const index = favorites.indexOf(track);
            favorites.splice(index, 1);
          } else {
            // если трек не в избранном, добавляем его в список
            favorites.push(track);
          }
      
          localStorage.setItem('favorites', JSON.stringify(favorites)); // сохраняем список избранных треков в локальное хранилище
        };
      
    return (
        <div className={s.track_list}>
            <div className={s.content}>
                <div className={s.item}>
                    <div className={s.track}>
                        <div className={s.track_title}>
                            <div className={s.title_image}>
                                <SkeletonLoading width={51} height={51}>
                                    <svg className={s.title_svg} alt="music">
                                        <use xlinkHref={`${sprite}#icon-note`}></use>
                                    </svg>
                                </SkeletonLoading>      
                            </div>
                            <div className={s.title_text}>
                                <SkeletonLoading width={330} height={25}>
                                    <a className={s.title_link} href="http://">{track.title} <span className="track__title-span"></span></a>
                                </SkeletonLoading>
                            </div>
                        </div>
                            <div className={s.author}>
                                <SkeletonLoading width={280} height={25}>
                                        <a className={s.author_link} href="http://">{track.author}</a>
                                </SkeletonLoading>
                            </div>
                            <div className={s.album}>
                                <SkeletonLoading width={310} height={25}>
                                    <a className={s.album_link} href="http://">{track.album}</a>
                                </SkeletonLoading>
                            </div>
                            <div className={s.time}>
                                    <svg className={s.time_svg} alt="time" onClick={handleFavorite}>
                                        <use xlinkHref={`${sprite}#icon-like`} fill={isFavorite ? 'blueviolet' : 'gray'}></use>
                                    </svg>
                                    <span className={s.time_text}>{track.time}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;
