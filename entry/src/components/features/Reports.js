import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CalendarCard from './Cards/PeriodTracker/CalendarCard';
import Circle from 'react-circle';
import Card from '@material-ui/core/Card';
import './features.css'
import Calendar from 'react-calendar';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

export default function Reports(){

    const [date,onChange]= useState(new Date());
    const userEmail = useSelector( state => state.userEmail.email);
    const [userDetails,setUserDetails] = useState({
        reproductive : [],
        mental: '',
        birth: [],
        fertileDays: [],
        periodDate: '',
        menstrualCondition:[]
        
    });

    useEffect(() => {
        axios.get('/getUser', {params:{email:userEmail}})
            .then((response) => {
                const user = response.data.result[0];
                console.log(user.reproductiveHealth.results)
                setUserDetails({ ...user, reproductive:user.reproductiveHealth.results, mental:user.mentalHealth.results, 
                birth:user.birthControl.results, fertileDays:user.periodTracker.expectedFertileDays, periodDate:user.periodTracker.expectedMenstrualDate,
            menstrualCondition:user.menstrualCondition.results});
                console.log(userDetails)
            },(error) => {
                console.log(error);
            });  
    },[]);

    
    return(
        <div className='col-wrap'>
            <h5 className='text-center dark'>Your Health Report</h5>
            <div className='row-wrap '>
                <div className='col s8'>
                    <Card className=' row-wrap'> 
                    <h5>Period Analysis</h5>
                    <Calendar
                        style={{ height: 500 }}
                        onChange={onChange}
                        value={date}
                        tileClassName={({ date, view }) => {
                        if(userDetails.fertileDays.find(x=>moment(x).format("DD-MM-YYYY")===moment(date).format("DD-MM-YYYY"))){
                        return  'highlight'
                        }
                        }}
                        tileDisabled={({ date }) => date.getDay() === 0}
                        minDate={
                        new Date()
                        }
                    >
                    </Calendar>
                    <div className='details'>Your Expected Period Date is: <div className='dark'>{moment(userDetails.periodDate).format('DD-MM-YYYY')}</div></div>
                    <li className='details highlight'>Red Marked Dates are your Fertile Days</li>
                    </Card>
                </div>
            </div>
            
            <div className='row-wrap'>
                <div >
                    <div className='card'> 
                    <h5>Potential Disease</h5>
                        {userDetails.reproductive.map(x => (
                        <li>{x}</li>
                        ))}
                        {userDetails.menstrualCondition.map(x => (
                        <li>{x}</li>
                        ))}
                    </div>
                </div>
                <div  >
                <div className='card '> 
                      <Circle size={150}   progressColor="#f06292" bgColor="#c5cae9" 
                        progress={userDetails.mental * 12}/>
                       <h6 className='text-center dark mrg40-TB'>{userDetails.mental < 6 && <div style={{ textAlign:'center'}} >Your symptoms seem normal. No need to worry. </div>}
                    {userDetails.mental >= 6 && userDetails.mental <= 11 && <div style={{ textAlign:'center'}}>You are mildly depressed. Please visit a doctor.</div>}
                    {userDetails.mental > 11 && <div style={{ textAlign:'center'}}>Your symptoms suggest severe depression. Please visit a doctor as soon as possible.</div>}</h6>
                    </div>
                </div>
                <div >
                    <div className='card'> 
                    <h5>Birth Control Methods</h5>
                        {userDetails.birth.map(x => (
                        <li>{x}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
        };
      