import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/BirthControl/card1';
import Card2 from './Cards/BirthControl/card2';
import Card3 from './Cards/BirthControl/card3';
import ResultCard from './Cards/BirthControl/ResultCard'

export default function BirthControl(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [birthControlDetails,setBirthControlDetails] = useState({
        important:[],
        hormonalMethod:'',
        vaginalMethod:''
    });

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setBirthControlDetails({ ...birthControlDetails, important:e.target.value});
    }

 const handleMethodChange = (e)=>{
    e.preventDefault();
    setBirthControlDetails({...birthControlDetails,[e.target.name]:e.target.value});
}
    const nextStep = () => {
       setState(prevState => prevState+1);
    }

    const prevStep = () => {
        setState(prevState => prevState-1);
    }

    const onSubmit = e =>{
        e.preventDefault();
        const birthControl = {
            email:userEmail,
            important:birthControlDetails.important,
            hormonalMethod:birthControlDetails.hormonalMethod,
            vaginalMethod:birthControlDetails.vaginalMethod    
        }
        axios.post('/birthControl',birthControl)
        .then((response)=>{
            console.log(response);
            nextStep();
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    console.log(birthControlDetails);

    switch(step) {
            case 1:
                return <Card1
                        nextStep={nextStep}
                        handleChange={handleChange}
                        important={birthControlDetails.important}
                        />
            case 2:
                return <Card2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleMethodChange}
                        hormonalMethod={birthControlDetails.hormonalMethod}
                        />
            case 3:
                return <Card3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleMethodChange}
                        onSubmit={onSubmit}
                        vaginalMethod={birthControlDetails.vaginalMethod}
                        />
            case 4:
                return <ResultCard 
                        birthControlDetails={birthControlDetails}/>
            }
        };
      