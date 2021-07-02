import React from 'react';
import {Link} from 'react-router-dom';

export default function MenstrualAnalysis() {

    return (
        <div className = 'container'>
            <div className='row'>
                <div className='col s6'>
                    <Link to='/periodTracker'>Period Tracker</Link>
                </div>
                <div className='col s6'>
                <Link to='/menstrualCondition'>Menstrual Condition</Link>
                </div>
                </div>
            </div>
    );


};