import React, { useEffect, useState } from 'react'
import ContactSeacher from '../../Contacts/ContactSearcher'
import { getVideos } from '../../../services/Api'
import './VideosMemoryForm.scss'

const VideosMemoryForm = ({ stateForm, setStateForm }) => {
    const [myVideos, setMyVideos] = useState([])
    const [favLoaded, setFavLoaded] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [searchedVideos, setSearchedVideos] = useState([])
    const [search, setSearch] = useState({
        search: ''
    })

    useEffect(() => {
        getVideos()
            .then(videos => {
                setMyVideos(videos)
                setSearchedVideos(videos)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const match = myVideos.filter(video => video.title.toLowerCase().includes(search.search))
        setSearchedVideos(match)
    }, [search])

    const handleSearchVideo = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleSelectVideo = (video) => {
        setStateForm(prev => {
            return {
                ...prev,
                video: video
            }
        })
        setFavLoaded(true)
    }

    return (
        <div>
            <div className='MemoryImagesContainer'>
                <div>
                    <h5 className='py-3'>Elige un video de tu galería:</h5>
                    <ContactSeacher
                        handleSearch={handleSearchVideo}
                        search={search}
                        placeholder='Busca un Vídeo'
                    />
                    <div className='MyImagesContainer'>
                        {loaded && searchedVideos.map((video, index) => {
                            return (
                                <div className='MemoryVideoCard' key={index} >
                                    <div>
                                        <img
                                            src={video.snippet}
                                            key={index}
                                            className='MemoryVideoThumbnail'
                                            alt='recorte'
                                            onClick={() => handleSelectVideo(video)}
                                        />
                                    </div>
                                    <div>
                                        <p className='MemoryVideoCardTitle' >{video.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='MemorySelectedVideo'>
                    <div>
                        <h5 className='py-3'>Video seleccionado:</h5>
                        {favLoaded && (
                            <div className='SelectedVideoCard' >
                                <div>
                                    <img
                                        src={stateForm.video?.snippet}
                                        className='SelectedVideoThumbnail'
                                        alt='recorte'
                                    />
                                </div>
                                <div>
                                    <p className='SelectedVideoCardTitle' >{stateForm.video?.title}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideosMemoryForm