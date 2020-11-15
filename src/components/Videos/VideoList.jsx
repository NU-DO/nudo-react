import React from 'react'
import VideoSearchForm from './VideoSearchForm'
import Video from './Video'
import './VideoList.scss'

const VideoList = ({ flagData, onVideoSelected, handleChangeSearch, handleSubmit, addVideoClick, title, videosYT }) => {

  return (
    <div className='VideoList'>
      <VideoSearchForm
        handleChangeSearch={handleChangeSearch}
        handleSubmit={handleSubmit}
        title={title}
      />
      {flagData && (
        <div className='video-list'>
          <div>
            <Video onVideoSelected={onVideoSelected} addVideoClick={addVideoClick} videosYT={videosYT} />
          </div>
        </div>
      )}

    </div>
  )
}

export default VideoList