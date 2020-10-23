import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventIcon from '@material-ui/icons/Event';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NudoDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    hamMenu: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Fotos', 'Música', 'Contactos', 'Localizaciones', 'Historia', 'Eventos', 'Juegos'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <PhotoLibraryIcon /> :
            index === 1 ? <MusicNoteIcon /> :
            index === 2 ? <ContactsIcon /> :
            index === 3 ? <LocationOnIcon /> :
            index === 4 ? <TimelapseIcon /> :
            index === 5 ? <EventIcon /> : <SportsEsportsIcon />}
             </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Estadísticas', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index  === 0 ? <EqualizerIcon /> : <MeetingRoomIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['hamMenu'].map((anchor) => (
        <React.Fragment key={anchor}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleDrawer(anchor, true)}/>
                    </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>

    
      ))}
    </div>
  );
}