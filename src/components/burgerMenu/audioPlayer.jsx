import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
  }, [src]);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [position, setPosition] = useState(0);

  const updateTime = () => {
    const newPosition = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setPosition(newPosition);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);


  return (
    <div>
      <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => {
          const newPosition = e.target.value;
          const newTime = (newPosition / 100) * audioRef.current.duration;
          audioRef.current.currentTime = newTime;
          setPosition(newPosition);
        }}
      />
    </div>
  );
};

export default AudioPlayer;