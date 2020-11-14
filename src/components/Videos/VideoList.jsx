import React from 'react'
import VideoSearchForm from './VideoSearchForm'
import Video from './Video'

const VideoList = ({ data, onVideoSelected, handleChangeSearch, handleSubmit, addVideoClick, title, videosYT }) => {
  return (
    <div className='VideoList'>
       <VideoSearchForm 
          handleChangeSearch={handleChangeSearch} 
          handleSubmit={handleSubmit} 
          title={title} 
        />
        <div className='video-list'>
          <div style={{ padding: '20px 0' }}>
            <Video data={data} onVideoSelected={onVideoSelected} addVideoClick={addVideoClick} videosYT={videosYT} />
          </div>
        </div>
    </div>
  )
}

export default VideoList