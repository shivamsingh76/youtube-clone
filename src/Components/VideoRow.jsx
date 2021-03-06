import React from 'react';
import './VideoRow.css';

function VideoRow({ image, title, channel, views, subs, descreption, timestamp }) {
    return (
        <div className='videoRow'>
            <img src={image} alt={title}/>
            <div className='videoRow__text'>
                <h3>{title}</h3>
                <p className='videoRow__headline'>
                    {channel} • <span className='videoRow__subs'><span className='videoRow__subsNumber'>{subs}</span> Subscribers</span> {views} views • {timestamp} 
                </p>
                <p className='videoRow__descreption'>{descreption}</p>
            </div>
        </div>
    )
}

export default VideoRow
