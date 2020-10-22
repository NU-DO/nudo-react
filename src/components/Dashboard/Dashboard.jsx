import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext'
import './Dashboard.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DCard from './DCard';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Dashboard = () => {

    const { user } = useAuthContext()
    const classes = useStyles();
    return (
        // Dashboard rounded
        // <div>
        //   <div className='DashboardIconContainer'>
        //                 <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Logo-central_dyzh1a.svg' className='Dashboard-icon-primary' />
        //                 <p>Welcome {user.username}</p>
        //             </div>
        //     <div>
        //         <ul class='circle-container'>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-musica_a9qwta.svg' /></li>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-contactos_qaigqt.svg' /></li>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Localizaciones_oyhg3m.svg' /></li>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-eventos_ydhdym.svg' /></li>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg' /></li>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-appointments_grmf6d.svg' /></li>
        //             <li><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Juegos_axxxkw.svg' /></li>
        //         </ul>
        //     </div>
        // </div>
        <div>
            <DCard
                textHead='Images'
                img='https://www.carena.org/wp-content/uploads/memories.jpg'
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg'
                
            />
        </div>

    );
};

export default Dashboard;