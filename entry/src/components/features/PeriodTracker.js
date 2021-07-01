import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/PeriodTracker/card1';
import Card2 from './Cards/PeriodTracker/card2';
import Card3 from './Cards/PeriodTracker/card3';

export default function PeriodTracker(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [periodDetails,setPeriodDetails] = useState({
        lastMenstrualDate:'',
        menstrualLength:'',
        menstrualCycleLength:''
    });

    const handleChange = (e) => {
        e.preventDefault();
        setPeriodDetails({ ...periodDetails, [e.target.id]:e.target.value});
    }

    const nextStep = () => {
       setState(prevState => prevState+1);
    }

    const prevStep = () => {
        setState(prevState => prevState-1);
    }

    const onSubmit = e =>{
        e.preventDefault();
        let nextMenstrualExpectedDate = '';
        let expectedOvulationDate = '';
        let fertileDays = '';
        let monthLength = 30;                                                                        // will be 30 or 31
        nextMenstrualExpectedDate = (parseInt(periodDetails.lastMenstrualDate) + parseInt(periodDetails.menstrualCycleLength)) % monthLength;
        expectedOvulationDate = (parseInt(periodDetails.lastMenstrualDate) + (parseInt(periodDetails.menstrualCycleLength) - 14 )) % monthLength;   //ovulation occurs 12-14 days before next period starts.   
        fertileDays = (expectedOvulationDate - 2) +','+ (expectedOvulationDate - 1) + ',' + (expectedOvulationDate);                                // if ovulation occurs around day 14, then most fertile days are days 12, 13 and 14
        
        const periodTracker = {
            email:userEmail,
            menstrualCycleLength:periodDetails.menstrualCycleLength,
            menstrualLength:periodDetails.menstrualLength,
            lastMenstrualDate:periodDetails.lastMenstrualDate ,
            expectedOvulationDate:expectedOvulationDate.toString(),
            expectedMenstrualDate:nextMenstrualExpectedDate.toString(),
            expectedFertileDays:fertileDays.toString()
        }
        axios.post('/periodTracker',periodTracker)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    console.log(periodDetails);

    switch(step) {
            case 1:
                return <Card1
                        nextStep={nextStep}
                        handleChange={handleChange}
                        lastMenstrualDate={periodDetails.lastMenstrualDate}
                        />
            case 2:
                return <Card2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        menstrualLength={periodDetails.menstrualLength}
                        />
            case 3:
                return <Card3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        onSubmit={onSubmit}
                        menstrualCycleLength={periodDetails.menstrualCycleLength}
                        />
            }
        };
      