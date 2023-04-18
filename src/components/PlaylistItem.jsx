import React from 'react';

const PlaylistItem = () => {
    // console.log(props)
    return (
        <div className="PlaylistItem">
            <div className="track__title">
                <div className="track__title-image">
                </div>
                <div className="track__title-text">
                    <a className="track__title-link" href="http://">Guilt <span className="track__title-span"></span></a>
                </div>
            </div>
            <div className="track__author">
                <a className="track__author-link" href="http://">Nero</a>
            </div>
            <div className="track__album">
                <a className="track__album-link" href="http://">Welcome Reality</a>
            </div>
            <div className="track__time">
                <span className="track__time-text">4:44</span>
            </div>
        </div>
    );
};

export default PlaylistItem;