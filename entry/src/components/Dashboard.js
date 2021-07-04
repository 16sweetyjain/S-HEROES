import React from 'react';
import {Link} from 'react-router-dom';
import MenstrualAnalysis from './DashboardCards/cards/MenstrualAnalysis';
import BirthControl from './DashboardCards/cards/BirthControl';
import ReproductiveHealth from './DashboardCards/cards/ReproductiveHealth';
import MentalHealth from './DashboardCards/cards/MentalHealth';
import Awareness from './DashboardCards/cards/Awareness';
import Reports from './DashboardCards/cards/Reports';

export default function Dashboard() {

    return (
        <div className = 'container'>
            Welcome
            <div className='row'>
                <div className='col s4'>
                    <MenstrualAnalysis/>
                </div>
                <div className='col s4'>
                   <ReproductiveHealth/>
                </div>
                <div className='col s4'>
                <BirthControl/>
                </div>
                </div>
                <div className='row'>
                <div className='col s4'>
                <MentalHealth/>
                </div>
                <div className='col s4'>
                <Reports/>
                </div>
                <div className='col s4'>
                <Awareness/>
                </div>
                </div>
            </div>
    );


};