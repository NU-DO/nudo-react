import React, { useEffect, useState } from 'react'
import Image from './Image'
import GenericButton from '../Generic/GenericButton'
import ReactPaginate from 'react-paginate'
import { SRLWrapper } from 'simple-react-lightbox'
import './Album.scss'

const PER_PAGE = 6

const options = {
    caption: {
        captionFontSize: '22px',
        captionColor: '#8D99AE',
        captionFontWeight: 200,
        showCaption: true
    },
    settings: {
        transitionTimingFunction: 'ease-in-out',
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
        slideAnimationType: 'slide',
        disablePanzoom: true,
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '5px',
        showAutoplayButton: true,
        showCloseButton: true,
        showDownloadButton: true,
        showFullscreenButton: true,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: true,
        size: '40px'
    },
    thumbnails: {
        showThumbnails: true,
        thumbnailsAlignment: 'center',
        thumbnailsContainerBackgroundColor: 'transparent',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '1px',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px']
    }
}

const Album = ({ images, setImages, addImageClick, handleDelete, editThisImage }) => {
    const [dateImages, setDateImages] = useState(images)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setDateImages(images)
    }, [images])

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }

    const offset = currentPage * PER_PAGE

    const currentPageData = dateImages
        .slice(offset, offset + PER_PAGE)
        .map(image => <Image image={image} key={image.id} handleDelete={handleDelete} editThisImage={editThisImage} />)

    const pageCount = Math.ceil(dateImages.length / PER_PAGE)

    const setCronologicalAscendent = (images) => {
        const imageDate = [...images].sort((a, b) => a.date - b.date)
        setDateImages(imageDate)
    }

    const setCronologicalDescendent = (images) => {
        const imageDate = [...images].sort((a, b) => b.date - a.date)
        setDateImages(imageDate)
    }

    return (
        <div>
            <div className='ContainerAlbum'>
                <div className='ContainerAlbumButtons'>
                    <div className='ImageGenericButton'>
                        <GenericButton
                            text='Nueva foto'
                            onClick={addImageClick} />
                    </div>
                    <div className='AlbumRadioButtons'>
                        <label className='form-check-label mr-2' htmlFor='exampleRadios1'>
                            Cronológico:
                        </label>
                        <div className='form-check'>
                            <input
                                className='form-check-input pl-2'
                                type='radio' name='exampleRadios'
                                id='exampleRadios1' value='option1'
                                onClick={() => setCronologicalAscendent(dateImages)}
                            />
                            <label className='form-check-label mr-2' htmlFor='exampleRadios1'>
                                Ascendente
                        </label>
                        </div>
                        <div className='form-check'>
                            <input
                                className='form-check-input pl-2'
                                type='radio' name='exampleRadios'
                                id='exampleRadios1' value='option1'
                                onClick={() => setCronologicalDescendent(dateImages)}
                            />
                            <label className='form-check-label' htmlFor='exampleRadios1'>
                                Descendente
                        </label>
                        </div>
                    </div>
                </div>

                <SRLWrapper options={options} className='Hello'>
                    <div className='ContainerPhotoWrapper'>
                        {currentPageData}
                    </div>
                </SRLWrapper>

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

export default Album