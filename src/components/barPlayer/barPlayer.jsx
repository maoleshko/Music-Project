import React from 'react';
import s from './barPlayer.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeleton/skeletonLoading';

function BarPlayer() {
    
    const audio = new Audio("/Bobby_Marleni_-_Dropin.mp3");
   

    function handlePlay() {
        audio.play();
      }

      function handlePause() {
        audio.pause();
      }

  return (
    <div className={s.bar}>
        <div>
        <button onClick={handlePause}>Stop</button>
        </div>
                <div className={s.bar__content}> 
                    <div className={s.bar__player_progress}></div>
                    <div className={s.bar__player_block}>
                        <div className={s.bar__player}>
                            <div className={s.player__controls}>
                                <div className={s.player__btn_prev}>
                                    <svg className={s.player__btn_prev_svg} alt="prev">
                                        <use xlinkHref={`${sprite}#icon-prev`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_play}>
                                    <svg onClick={handlePlay} className={s.player__btn_play_svg} alt="play">
                                        <use xlinkHref={`${sprite}#icon-play`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_next}>
                                    <svg className={s.player__btn_next_svg} alt="next">
                                        <use xlinkHref={`${sprite}#icon-next`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_repeat}>
                                    <svg className={s.player__btn_repeat_svg} alt="repeat">
                                        <use xlinkHref={`${sprite}#icon-repeat`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_shuffle}>
                                    <svg className={s.player__btn_shuffle_svg} alt="shuffle">
                                        <use xlinkHref={`${sprite}#icon-shuffle`}></use>
                                    </svg>
                                </div>
                            </div>
                            
                        <div className={s.player__track_play}>
                                <div className={s.track_play__contain}>
                                    <div className={s.track_play__image}>
                                    <SkeletonLoading width={51} height={51}>
                                        <svg className={s.track_play__svg} alt="music">
                                            <use xlinkHref={`${sprite}#icon-note`}></use>
                                        </svg>
                                    </SkeletonLoading>
                                    </div>
                                    <div className={s.track_play__author}>
                                    <SkeletonLoading width={50} height={15}>
                                        <a className={s.track_play__author_link} href="http://">Ты та...</a>
                                    </SkeletonLoading>
                                    </div>
                                    <div className={s.track_play__album}>
                                    <SkeletonLoading width={50} height={15}>
                                        <a className={s.track_play__album_link} href="http://">Баста</a>
                                    </SkeletonLoading>
                                    </div>
                                </div>

                            <div className={s.track_play__like_dis}>
                                    <div className={s.track_play__like} >
                                        <svg className={s.track_play__like_svg} alt="like">
                                            <use xlinkHref={`${sprite}#icon-like`}></use>
                                        </svg>
                                    </div>
                                    <div className={s.track_play__dislike} >
                                        <svg className={s.track_play__dislike_svg} alt="dislike">
                                            <use xlinkHref={`${sprite}#icon-dislike`}></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.bar__volume_block} >
                           <div className={s.volume__content}>
                                <div className={s.volume__image}>
                                    <svg className={s.volume__svg} alt="volume">
                                        <use xlinkHref={`${sprite}#icon-volume`}></use>
                                    </svg>
                                </div>
                                <div className={s.volume__progress}>
                                    <input className={s.volume__progress_line} type="range" name="range"/>
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default  BarPlayer;
