import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/BirthControl/card1';
import Card2 from './Cards/BirthControl/card2';
import Card3 from './Cards/BirthControl/card3';

export default function BirthControl(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [birthControlDetails,setBirthControlDetails] = useState({
        important:[],
        hormonalMethod:'',
        vaginalMethod:''
    });

    const [impArray,setArray]=useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        //setArray([...impArray, e.target.value]);
        setBirthControlDetails({ ...birthControlDetails, important:e.target.value});
    }

    const handleHormonalMethodChange = (e)=>{
     e.preventDefault();
     setBirthControlDetails({...birthControlDetails,hormonalMethod:e.target.value});
 }

 const handleVaginalMethodChange = (e)=>{
    e.preventDefault();
    setBirthControlDetails({...birthControlDetails,vaginalMethod:e.target.value});
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
                        handleChange={handleHormonalMethodChange}
                        hormonalMethod={birthControlDetails.hormonalMethod}
                        />
            case 3:
                return <Card3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleVaginalMethodChange}
                        onSubmit={onSubmit}
                        vaginalMethod={birthControlDetails.vaginalMethod}
                        />
            }
        };
      