import React from 'react';
import './playlistitem.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeletonLoading';

const PlaylistItem = (props) => {
    return (
        <div className="centerblock__content">
            <div className="content__playlist playlist">
                <div className="playlist__item">
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <SkeletonLoading width={51} height={51}>
                                    <svg className="track__title-svg" alt="music">
                                        <use xlinkHref={`${sprite}#icon-note`}></use>
                                    </svg>
                                </SkeletonLoading>      
                            </div>
                            <div className="track__title-text">
                                <SkeletonLoading width={350} height={25}>
                                    <a className="track__title-link" href="http://">{props.track.title} <span className="track__title-span"></span></a>
                                </SkeletonLoading>
                            </div>
                        </div>
                            <div className="track__author">
                                <SkeletonLoading width={300} height={25}>
                                        <a className="track__author-link" href="http://">{props.track.author}</a>
                                </SkeletonLoading>
                            </div>
                            <div className="track__album">
                                <SkeletonLoading width={320} height={25}>
                                    <a className="track__album-link" href="http://">{props.track.album}</a>
                                </SkeletonLoading>
                            </div>
                            <div className="track__time">
                                    <svg className="track__time-svg" alt="time">
                                        <use xlinkHref={`${sprite}#icon-like`}></use>
                                    </svg>
                                    <span className="track__time-text">{props.track.time}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistItem;
