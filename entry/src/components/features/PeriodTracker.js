import React, { useState } from 'react';
import axios from 'axios';

export default function PeriodTracker(){

    const [periodDetails,setPeriodDetails] = useState({
        lastMenstrualDate:'',
        menstrualLength:'',
        menstrualCycleLength:''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setPeriodDetails({ ...periodDetails, [e.target.id]:e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        let nextMenstrualExpectedDate = '';
        let expectedOvulationDate = '';
        let fertileDays = '';
        let monthLength = 30;                                                                        // will be 30 or 31
        //expectedOvulationDates.push((12 - parseInt(nextMenstrualExpectedDate)).toString());        
        //expectedOvulationDates.push((13 - parseInt(nextMenstrualExpectedDate)).toString());
        nextMenstrualExpectedDate = (parseInt(periodDetails.lastMenstrualDate) + parseInt(periodDetails.menstrualCycleLength)) % monthLength;
        expectedOvulationDate = (parseInt(periodDetails.lastMenstrualDate) + (parseInt(periodDetails.menstrualCycleLength) - 14 )) % monthLength;   //ovulation occurs 12-14 days before next period starts.   
        fertileDays = (expectedOvulationDate - 2) +','+ (expectedOvulationDate - 1) + ',' + (expectedOvulationDate);                                // if ovulation occurs around day 14, then most fertile days are days 12, 13 and 14
        
        const periodTracker = {
            email:'anushka@gmail.com',
            menstrualCycleLength:periodDetails.menstrualCycleLength,
            menstrualLength:periodDetails.menstrualLength,
            lastMenstrualDate:periodDetails.lastMenstrualDate ,
            expectedOvulationDate:expectedOvulationDate.toString(),
            expectedMenstrualDate:nextMenstrualExpectedDate.toString(),
            expectedFertileDays:fertileDays.toString()
        }
        //console.log(periodTracker);

        axios.post('/periodTracker',periodTracker)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return (
        <div className='container'>
            <div className='row'>
                <form className="col s12">
                            <div className='row'>
                                <div className="input-field col s12">
                                    <i className="small material-icons prefix">date_range</i>
                                    <input  id ="lastMenstrualDate" type='text' value={periodDetails.lastDateOfPeriod} onChange={handleChange}/>
                                    <label>Enter period date of last month</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="input-field col s12">
                                    <i className="small material-icons prefix">date_range</i>
                                    <input  id ="menstrualLength" type='text' value={periodDetails.periodLength} onChange={handleChange}/>
                                    <label>Enter period length</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="input-field col s12">
                                    <i className="small material-icons prefix">date_range</i>
                                    <input  id ="menstrualCycleLength" type='text' value={periodDetails.cycleLength} onChange={handleChange}/>
                                    <label>Enter cycle length</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12" style = { { textAlign:'center' } }>
                                <button style={ { width: '100px', borderRadius: '3px', letterSpacing: '1.5px' } } className="btn btn-large btn-dark" onClick={ onSubmit }>Track period date of next month</button>
                            </div>
                        </div>
                </form>
                </div>
                
                </div>            
    );
}