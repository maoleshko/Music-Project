import React from 'react';
import Playlist from './playlistItem';

const Tracklist = ({tracks}) => {
    return (
        <div>
            {tracks.map(track => 
          <Playlist track={track} key={track.id}/>)
        }
        </div>
    )
}

export default Tracklist;