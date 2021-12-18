import React from 'react';

const SelectedVideo = ({selectedVideo}) => {
    if(!selectedVideo) {
        return <div> Loading ... </div>
    }

    const videoSource = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>
            <div className = "ui embed">
                <iframe title = "video player" src = {videoSource} />
            </div>
            <div className = "ui segment">
                <h4 className = "ui header"> 
                    {selectedVideo.snippet.title}
                </h4>
                <p>
                    {selectedVideo.snippet.description}
                </p>
            </div>
        </div>
    )
}

export default SelectedVideo;