import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div> 

            <hr />

            <ChannelRow
                image='https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem'
                channel='Clever Programmer'
                verified
                subs='943k'
                noOfVideos={577}
                descreption='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...'
            />

            <hr />

            <VideoRow 
                image='https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg'
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                channel='Clever Programmer'
                views='168K'
                subs='943K'
                descreption='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register...'
                timestamp='1 year ago'
            />
            <VideoRow 
                image='https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg'
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                channel='Clever Programmer'
                views='168K'
                subs='943K'
                descreption='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register...'
                timestamp='1 year ago'
            />
            <VideoRow 
                image='https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg'
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                channel='Clever Programmer'
                views='168K'
                subs='943K'
                descreption='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register...'
                timestamp='1 year ago'
            />
            <VideoRow 
                image='https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg'
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                channel='Clever Programmer'
                views='168K'
                subs='943K'
                descreption='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register...'
                timestamp='1 year ago'
            />
            <VideoRow 
                image='https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg'
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                channel='Clever Programmer'
                views='168K'
                subs='943K'
                descreption='Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register...'
                timestamp='1 year ago'
            />
        </div>
    )
}

export default SearchPage
