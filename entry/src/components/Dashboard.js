import React from 'react';
import {Link} from 'react-router-dom';

export default function Dashboard() {

    return (
        <div className = 'container'>
            Welcome
            <div className='row'>
                <div className='col s4'>
                    <Link to='/menstrualAnalysis'>Menstrual Analysis</Link>
                </div>
                <div className='col s4'>
                <Link to='/reproductiveHealth'>Reproductive Health</Link>
                </div>
                <div className='col s4'>
                <Link to='/mentalHealth'>Mental Health</Link>
                </div>
                </div>
                <div className='row'>
                <div className='col s4'>
                <Link to='/birthControl'>Birth Control</Link>
                </div>
                <div className='col s4'>
                <Link to='/reports'>Reports</Link>
                </div>
                <div className='col s4'>
                <Link to='/awareness'>Awareness</Link>
                </div>
                </div>
            </div>
    );


};