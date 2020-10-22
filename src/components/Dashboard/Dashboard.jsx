import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>Soy el Dandi de Barcelona, que por donde pasa enamora.</h1>
            <Link to="/songs"><button>Songs</button></Link>
        </div>
    );
};

export default Dashboard;