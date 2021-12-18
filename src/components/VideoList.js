import React from 'react';
import VideoCard from './VideoCard'

const VideoList = ({videos, onVideoSelect}) => {
    const videoList = videos.map( video => {
        return <VideoCard key = {video.id.videoId} video = {video} onVideoSelect = {onVideoSelect}/>
    })
    return <div className = "ui relaxed divided list"> {videoList} </div>
}

export default VideoList;