import React, {useState, useEffect} from 'react';
import s from './playlistitem.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeleton/skeletonLoading';
import { useSetLikeMutation, useSetUnlikeMutation } from '../../store/api/musicApi'
import { setCurrentTrack } from '../../store/slices/setTracks';
import { useDispatch } from 'react-redux';

const PlaylistItem = ({track}) => {

    const { id: trackID, name, author, album, stared_user, duration_in_seconds } = track
    
    const [postLike] =  useSetLikeMutation();
    const [postUnlike] = useSetUnlikeMutation();
    const dispatch = useDispatch()

    const userId = Number(localStorage.getItem('user_id'));

    const [isFavourite, setFavourite] = useState(false)

    useEffect(() => {
        setFavourite(stared_user.some((user) => user.id === userId))
      }, [track])

      const handleFavorite = (event) => {
        event.stopPropagation()
        if (isFavourite) {
            console.log(trackID)
            postUnlike(trackID)
        } else {
            postLike(trackID)
        }
      }

      const handleOnRowClick = () => {
        dispatch(setCurrentTrack({
            track: track,
            })
        );
      }
            
    return (
        <div className={s.track_list}>
            <div className={s.content}>
                <div className={s.item} onClick={() => handleOnRowClick()}>
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
                                    <a className={s.title_link} href="http://">{name} <span className="track__title-span"></span></a>
                                </SkeletonLoading>
                            </div>
                        </div>
                            <div className={s.author}>
                                <SkeletonLoading width={280} height={25}>
                                        <a className={s.author_link} href="http://">{author}</a>
                                </SkeletonLoading>
                            </div>
                            <div className={s.album}>
                                <SkeletonLoading width={310} height={25}>
                                    <a className={s.album_link} href="http://">{album}</a>
                                </SkeletonLoading>
                            </div>
                            <div className={s.time}>
                                    <svg className={s.time_svg} alt="time" onClick={handleFavorite}>
                                         <use xlinkHref={`${sprite}#icon-like`} fill={isFavourite ? 'blueviolet' : 'gray'} />
     
                                    </svg>
                                    <span className={s.time_text}>{(duration_in_seconds / 60).toFixed(2)}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;
