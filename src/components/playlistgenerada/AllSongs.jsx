import React from 'react'
import "./AllSongs.css"

function AllSongs(props) {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedDuration = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedDuration;
  };

  const durationInMinutes = formatDuration(props.duration);
  return (
    <div className='allSongs-playlists'>
        <img className="imagen-cover" src={props.imagenCover}alt='caratula' />
        <div className='allSongs-title-playlist'>
            <h5>{props.title}</h5>
            <p>{props.artistName}</p>
        </div>
        <p className='allsongs-duration'>{durationInMinutes}</p>
        <img src="/images/playlistgenerada/icon-right-placeholder.svg"/>
    </div>
  )
}

export default AllSongs;