import React from "react";
import "./Video.scss";

const Video = ({ onVideoSelected, videosYT, addVideoClick }) => {
    const allVideos = videosYT.map(({ snippet, id }, index) => {
        return (
            <div
                className="VideoCard"
                key={index}
                onClick={() => onVideoSelected(id, snippet.thumbnails.high.url)}>
                <div>
                    <img src={snippet.thumbnails.high.url} key={index} className='VideoThumbnail' />
                </div>
                <div>
                    <p className="VideoCardTitle">{snippet.title}</p>
                </div>
                <button onClick={() => addVideoClick()}>
                    +
                </button>
            </div>
        )
    })
    return (
        <div>
        { allVideos }
        </div>
    )
}

export default Video