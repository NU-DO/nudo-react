import React, { useEffect, useState } from 'react'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
import VideoFavs from './VideoFavs'
import VideoModal from './VideoModal'
import Spinner from '../Generic/Spinner'
import Modal from '../Generic/Modal'
import { getVideos, createVideo, deleteVideo, editVideo } from '../../services/Api'
import youTubeApi from '../../services/YouTubeService'
import './VideoMenu.scss'
import ModalDark from '../Generic/ModalDark'

const VideoMenu = () => {
    const [videos, setVideos] = useState([])
    const [videosYT, setVideosYT] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false)
    const [flagData, setFlagData] = useState(false)
    const [title, setTitle] = useState('')
    const [state, setState] = useState({})
    const [error, setError] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0)
        getVideos()
            .then(videos => {
                setVideos(videos)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)
    const openDarkModal = () => setShowPlayer(true)
    const closeDarkModal = () => setShowPlayer(false)

    const handleChangeSearch = (e) => setTitle(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(title)
    }

    const onSearch = keyword => {
        youTubeApi.get('/search', {
            params: {
                q: keyword,
            }
        })
            .then(response => {
               
                setVideosYT(response.data.items)
                setFlagData(true)
            })
    }

    const onVideoSelected = (videoId, snippet) => {
        setState((prev) => {
            return {
                ...prev,
                videoId: videoId.videoId || videoId,
                snippet
            }
        })
        
    }

    const playVideo = (video) => {
        if (video.description) {
            onVideoSelected(video.videoId, video.snippet)
        } else {
            onVideoSelected(video.videoId.videoId, video.snippet)
        }  
        openDarkModal()
    }

    const addVideoClick = (event) => {
        openModal()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const modalSent = (event) => {
        event.preventDefault()
        createVideo(state)
            .then(() => {
                getVideos()
                    .then(videos => setVideos(videos))
                setState({})
                closeModal()
                setError({})
            })
            .catch(err => setError(err.response.data.errors))
    }

    const editThisVideo = (video) => {
        setState(video)
        openModal()
    }

    const handleEditVideo = (event) => {
        event.preventDefault()
        // handleEditSnack()
        const body = {}
        body.title = state.title
        body.description = state.description

        editVideo(state.id, body)
            .then(() => {
                getVideos()
                    .then(videos => setVideos(videos))
                setState({})
                closeModal()
                setError({})
                // handleEditSnack()
            })
            .catch(err => setError(err.response.data.errors))
    }

    const handleDelete = (id) => {
        // handleDeleteSnack()
        deleteVideo(id)
            .then(() => {
                getVideos()
                    .then(videos => setVideos(videos))
            })
    }


    return (
        <div className='NudoMap'>
            <div className='YoutubeComponentContainer'>
                {loaded ?
                    <>
                        <div className='SearchVideoInput'>
                            <VideoList
                                onVideoSelected={onVideoSelected}
                                data={state.videoMetaInfo}
                                flagData={flagData}
                                handleChangeSearch={handleChangeSearch}
                                handleSubmit={handleSubmit}
                                videosYT={videosYT}
                                title={title}
                                addVideoClick={addVideoClick}
                            />
                        </div>
                        <div>
                            <VideoFavs
                                editThisVideo={editThisVideo}
                                handleDelete={handleDelete}
                                videos={videos}
                                playVideo={playVideo}
                            />
                        </div>
                        <div>
                            {showPlayer && (
                                <ModalDark>
                                    <VideoPlayer
                                        videoId={state.videoId}
                                        closeDarkModal={closeDarkModal}
                                    />
                                </ModalDark>

                            )}
                        </div>

                        {showDialog ? <Modal>
                            <VideoModal
                                closeModal={closeModal}
                                state={state}
                                modalSent={modalSent}
                                handleChange={handleChange}
                                handleEditVideo={handleEditVideo}
                                error={error}
                            />
                        </Modal>
                            : null}
                    </>
                    :
                    <Spinner />
                }
            </div>
        </div>

    )
}

export default VideoMenu