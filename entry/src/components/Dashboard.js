import React from 'react';
import { useHistory } from 'react-router';
import MenstrualAnalysis from './DashboardCards/cards/MenstrualAnalysis';
import BirthControl from './DashboardCards/cards/BirthControl';
import ReproductiveHealth from './DashboardCards/cards/ReproductiveHealth';
import MentalHealth from './DashboardCards/cards/MentalHealth';
import Awareness from './DashboardCards/cards/Awareness';
import Reports from './DashboardCards/cards/Reports';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    Heading: {
      fontSize: '40px',
      textAlign: 'center',
      margin: '20px'
    },
    Button: {
        height: '30%',
        width: '27%',
        margin: 'auto',
        display: 'block'
      }
  });

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();
    
    return (
        <div className='container row-wrap'>
                <div className='row-w'>
                    <div className={classes.Heading}>
                            Welcome
                    </div>
                    <Button onClick={(() => history.push('/signin'))} className={classes.Button} size="small" variant="contained" color="primary">Signout</Button>
                </div>
                
            
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