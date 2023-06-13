import React from 'react';
import s from './barPlayer.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeleton/skeletonLoading';
import { useState, useRef, useEffect } from 'react';
import { useAudio } from "react-use"
import { useDispatch } from 'react-redux';
import { setCurrentTrack} from '../../store/slices/setTracks';
import {useTrack} from "../../hooks/use-track.jsx"


export const BarPlayer = (props) => {
    const dispatch = useDispatch()  
    
    const [isShuffle, setShuffle] = useState(false)
    const [isRepeat, setRepeat] = useState(false)
    const [position, setPosition] = useState();
    const ref = useRef(null);
    const clickRef = useRef();
    const {id, name, author} = useTrack();

    
    
    const tracks = props.tracks 

    let index = tracks.findIndex((track) => track.id === id);    
    if (index < 0) {
        index = 0
    }
   
    const playingTrack = tracks[index];    
 

    const [audio, state, controls,] = useAudio({
        
        src: playingTrack.track_file,
        autoPlay: false,
        onEnded: () => {
          if (!isRepeat) {
            handleNext()
          } else {
            controls.seek(0)
            controls.play()
          }
        },
      })
      const handleNext = () => {
        if (isShuffle) {
          index = Math.floor(Math.random() * tracks.length)
          
        } else index++
    
        index = index > tracks.length - 1 ? 0 : tracks[index]
        
        dispatch(setCurrentTrack({
            track: index,            
        }),       
        );
      }
      const handlePrev = () => {
        if (isShuffle) {
            index = Math.floor(Math.random() * tracks.length)
        } else index--
    
        index = index < 0 ? 0 : tracks[index]
        dispatch(setCurrentTrack({
            track: index,            
        }),       
        );
      }
  
     
    useEffect(() => {
        const duration = state.duration;
        const ct = state.time;
        
        setPosition({
            ...position,
            progress: (ct / duration) * 100,
            length: duration,
        });        
    },[state])
    


    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress = (offset / width) * 100;
        ref.current.currentTime = (divprogress / 100) * position.length;
    };   
   
  return (
    <div className={s.bar}>
        <div>
            {audio}               
        </div>
         <div className={s.bar__content}> 
            <div className={s.barPlayerProgress}>
                            <div className={s.navigationWrapper} onClick={checkWidth} ref={clickRef}>
                                
                            <div className={s.seekBar} style={{ 
                                width: position ? `${position.progress}%` : '', 
                            }}></div>
                            </div>
                    </div>
                    <div className={s.bar__player_block}>
                        <div className={s.bar__player}>
                            <div className={s.player__controls}>
                                <div className={s.player__btn_prev}>
                                    <svg className={s.player__btn_prev_svg} onClick={() => handlePrev()} alt="prev" >
                                        <use xlinkHref={`${sprite}#icon-prev`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_play}>
                                <svg className={s.player__btn_play_svg} alt="play" onClick={state.playing ? controls.pause: controls.play}> 
                                        <use xlinkHref={`${sprite}#icon-play`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_next}>
                                    <svg className={s.player__btn_next_svg}  onClick={() => handleNext()} alt="next">
                                        <use xlinkHref={`${sprite}#icon-next`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_repeat}>
                                    <svg className={s.player__btn_repeat_svg}  onClick={() => setRepeat(!isRepeat)} alt="repeat">
                                        <use xlinkHref={`${sprite}#icon-repeat`} stroke={isRepeat ? 'blueviolet' : ''}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_shuffle}>
                                    <svg className={s.player__btn_shuffle_svg} onClick={() => setShuffle(!isShuffle)} alt="shuffle">
                                        <use xlinkHref={`${sprite}#icon-shuffle`} stroke={isShuffle ? 'blueviolet' : ''}></use>
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
                                        <a className={s.track_play__author_link} href="http://">{name}</a>
                                    </SkeletonLoading>
                                    </div>
                                    <div className={s.track_play__album}>
                                    <SkeletonLoading width={50} height={15}>
                                        <a className={s.track_play__album_link} href="http://">{author}</a>
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
                                    <input className={s.volume__progress_line} 
                                    type="range" 
                                    name="range"/>
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default  BarPlayer;