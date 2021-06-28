import React from 'react';
import {Link} from 'react-router-dom';

export default function Dashboard() {

    return (
        <div>
            Welcome, 
            <Link to ='/periodTracker'>Period Tracker </Link>
        </div>
    );


};