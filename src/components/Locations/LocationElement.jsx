import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionActions from '@material-ui/core/AccordionActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Divider from '@material-ui/core/Divider'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import './LocationElement.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'left',
    },
    column: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center'
    },
    helper: {
        borderLeft: `0px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}))

const LocationElement = ({ marker, zoomToMarker, deleteMarker, onEdit, i }) => {
    const classes = useStyles()

    return (
        <li key={i} className='noBullet'>
            <div className={classes.root}>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1c-content'
                        id='panel1c-header'
                    >
                        <div className={classes.column}>
                            <img
                                src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603541727/NUDO/assets/Dashboard-icons/Icon-Marker-Map_ghhptr.png'
                                alt='Marker nudo icon'
                                className='LocationElementMarker'
                            />
                            <Typography className={classes.heading}>{marker.name}</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Typography variant='caption'>
                            <p><b>Descripción: </b></p>{marker.description}
                        </Typography>
                    </AccordionDetails>
                    <Divider variant='middle' />
                    <AccordionActions>
                        <ZoomInIcon onClick={() => zoomToMarker(marker.lat, marker.lng)} style={{ cursor: 'pointer' }} />
                        <EditIcon onClick={() => { onEdit(marker) }} style={{ cursor: 'pointer' }} />
                        <DeleteIcon onClick={() => deleteMarker(marker.id)} style={{ cursor: 'pointer' }} />
                    </AccordionActions>
                </Accordion>
            </div>
        </li>
    )
}

export default LocationElement