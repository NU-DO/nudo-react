import React, { useEffect, useState } from 'react'
import Image from './Image'
import GenericButton from '../Generic/GenericButton'
import ReactPaginate from "react-paginate";
import './Album.scss'

const PER_PAGE = 6

const Album = ({ images, setImages, addImageClick, handleDelete, editThisImage }) => {
    const [dateImages, setDateImages] = useState(images)
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setDateImages(images)
    }, [images])

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;


    const currentPageData = dateImages
        .slice(offset, offset + PER_PAGE)
        .map(image => <Image image={image} key={image.id} handleDelete={handleDelete} editThisImage={editThisImage} />)

    const pageCount = Math.ceil(dateImages.length / PER_PAGE);

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
                        <label class="form-check-label mr-2" for="exampleRadios1">
                            Cronológico:
                        </label>
                        <div class="form-check">
                            <input class="form-check-input pl-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={() => setCronologicalAscendent(dateImages)} />
                            <label class="form-check-label mr-2" for="exampleRadios1">
                                Ascendente
                        </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input pl-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={() => setCronologicalDescendent(dateImages)} />
                            <label class="form-check-label" for="exampleRadios1">
                                Descendente
                        </label>
                        </div>
                    </div>

                </div>
                {/* {dateImages.map(image => <Image image={image} key={image.id} handleDelete={handleDelete} editThisImage={editThisImage} />)} */}
                {currentPageData}
            </div>
            <ReactPaginate
                previousLabel={"← Anterior"}
                nextLabel={"Siguiente →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>

    )
}

export default Album