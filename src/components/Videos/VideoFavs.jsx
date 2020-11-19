import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ReactPaginate from 'react-paginate'
import './VideoFavs.scss'

const PER_PAGE = 6

const VideoFavs = ({ videos, editThisVideo, handleDelete, playVideo }) => {

    const [titleVideos, setTitleVideos] = useState(videos)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setTitleVideos(videos)
    }, [videos])

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }

    const offset = currentPage * PER_PAGE

    const currentPageData = titleVideos
        .slice(offset, offset + PER_PAGE)
        .map((video, index) => {
            return (
                <div className='VideoCardFav' key={index} >
                    <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1605477175/NUDO/assets/Recurso_19_bpiczh.svg' alt='logo' className='PlayIconVideo' onClick={() => playVideo(video)} />
                    <img src={video.snippet} className='VideoCardFavImage' onClick={() => playVideo(video)} alt='recorte de vídeo' />
                    <h5>{video.title}</h5>
                    <p> Descripción: {video.description}</p>
                    <div className='CardFavCRUDButtons'>
                        <EditIcon className='CardFavEditButton' onClick={() => editThisVideo(video)} />
                        <DeleteIcon className='CardFavDeleteButton' onClick={() => handleDelete(video.id)} />
                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(videos.length / PER_PAGE)

    const setAlphabetlAscendent = (videos) => {
        const alphaTitles = [...videos].sort((a, b) => a.title.localeCompare(b.title))
        setTitleVideos(alphaTitles)
        console.log(videos)
    }

    const setAlphabetlDescendent = (videos) => {
        const alphaTitles = [...videos].sort((a, b) => b.title.localeCompare(a.title))
        setTitleVideos(alphaTitles)
    }

    return (
        <div>
            <div className='AlbumRadioButtons d-flex ml-5'>
                <label className='form-check-label mr-2' htmlFor='exampleRadios1'>
                    Alfabético:
                        </label>
                <div className='form-check'>
                    <input className='form-check-input pl-2' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' onClick={() => setAlphabetlAscendent(titleVideos)} />
                    <label className='form-check-label mr-2' htmlFor='exampleRadios1'>
                        Ascendente
                        </label>
                </div>
                <div className='form-check'>
                    <input className='form-check-input pl-2' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' onClick={() => setAlphabetlDescendent(titleVideos)} />
                    <label className='form-check-label' htmlFor='exampleRadios1'>
                        Descendente
                        </label>
                </div>
            </div>
            <div className='ContainerVideoCardFav'>
                {currentPageData}
            </div>
            <ReactPaginate
                previousLabel={'← Anterior'}
                nextLabel={'Siguiente →'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                disabledClassName={'pagination__link--disabled'}
                activeClassName={'pagination__link--active'}
            />
        </div>

    )
}

export default VideoFavs