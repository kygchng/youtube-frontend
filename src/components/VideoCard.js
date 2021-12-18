import React from 'react';
import "./VideoCard.css";

const VideoCard = ({key, video, onVideoSelect}) => {
    
    return(
        <div>
            <div onClick = {() => onVideoSelect(video)} className = "video-card card">
                <img alt = {video.snippet.title} className = "ui image" src = {video.snippet.thumbnails.high.url}/>
                <div className = "content">
                    <div className = "header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;