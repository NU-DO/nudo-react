import React from 'react'
import './Image.scss'
import { SRLWrapper } from 'simple-react-lightbox'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: true,
        showFullscreenButton: true,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        showThumbnails: false,
        thumbnailsAlignment: 'center',
        thumbnailsContainerBackgroundColor: 'transparent',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '1px',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px']
    }
}

const Image = ({ image, handleDelete, editThisImage }) => {

    return (
        <SRLWrapper options={options}>
            <div className='PolaroidCard'>
                <div className='PolaroidCardImgContainer'>
                    <div className='FakeImageCard' style={{backgroundImage: `url(${image.url})`}}></div>
                    <img src={image.url} alt={image.description} className='PolaroidCardImg' />
                </div>
                <h6 className='PolaroidCardTitle'>{image.title}</h6>
                <p className='PolaroidCardDate'>({image.date})</p>
                <div className='PolaroidCRUDButtons'>
                    <EditIcon className='PolaroidEditButton' onClick={() => editThisImage(image)}/>
                    <DeleteIcon className='PolaroidDeleteButton' onClick={() => handleDelete(image.id)}/>
                </div>
            </div>
        </SRLWrapper>
    )
}

export default Image
