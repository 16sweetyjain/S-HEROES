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
        vaginalMethod:'',
        results:[]
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
        let results = [];

        if(birthControlDetails.important.find(x => {
            return (x === "Easy to use" || x === "Reduces periods") && birthControlDetails.hormonalMethod === "Yes"
        })){
            results.push("Birth control pill");
        }

        if(birthControlDetails.important.find(x => {
            return (x === "Best at preventing pregnancy" || x === "Doesnt reduce sexual pleasure") && birthControlDetails.vaginalMethod === "Yes"
        })){
            results.push("Intrauterine device (IUD)");
        }

        if(birthControlDetails.important.find(x => {
            return x === "Prevents STDs (sexually transmitted diseases)" || x === "Doesnt reduce sexual pleasure" || x === "Easy to use" || x === "No or few side effects"
        })){
            results.push("Condom");
        }

        if(birthControlDetails.important.find(x => {
            return (x === "Cost (Inexpensive)" || x === "Easy to use" || x === "Prevents STDs (sexually transmitted diseases)") && birthControlDetails.vaginalMethod === "Yes"
        })){
            results.push("Cervical Cap");
        }

        if(birthControlDetails.important.find(x => {
            return x === "Best at preventing pregnancy" && birthControlDetails.hormonalMethod === "Yes"
        })){
            results.push("Birth Control Shot");
        }

        setBirthControlDetails({...birthControlDetails,results:results});
        const birthControl = {
            email:userEmail,
            important:birthControlDetails.important,
            hormonalMethod:birthControlDetails.hormonalMethod,
            vaginalMethod:birthControlDetails.vaginalMethod ,
            results:results   
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
                        results={birthControlDetails.results}/>
            }
        };
      