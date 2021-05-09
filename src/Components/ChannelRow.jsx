import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlined';


function ChannelRow({ image, channel, verified, subs, noOfVideos, descreption }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__logo' src={image} alt={channel}/>
            <div className='channelRow__text'>
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{descreption}</p>
            </div>
        </div>
    )
}

export default ChannelRow
