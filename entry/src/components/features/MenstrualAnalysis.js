import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import PeriodTracker from '../MenstrualAnalysisCards/PeriodTracker';
import MenstrualCondition from '../MenstrualAnalysisCards/MenstrualCondition';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function MenstrualAnalysis() {
  
    return (
        <div className = 'container'>
            <div className='row'>
            <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
                <div className='col s6'>
                   <PeriodTracker/>
                </div>
                <div className='col s6'>
                <MenstrualCondition/>
                </div>
                </Grid>
                </div>
            </div>
    );


};