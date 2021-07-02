import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/MenstrualCondition/card1';
import Card2 from './Cards/MenstrualCondition/card2';
import Card3 from './Cards/MenstrualCondition/card3';
import Card4 from './Cards/MenstrualCondition/card4';
import Card5 from './Cards/MenstrualCondition/card5';
import Card6 from './Cards/MenstrualCondition/card6';


export default function MenstrualCondition(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [menstrualConditionDetails,setmenstrualConditionDetails] = useState({
        menstruationFlow:'',
        symptoms:[],
        mood:[],
        sex:[],
        discharge:[],
        contraceptive:[]
    });

    const handleChangeSymptoms = (e) => {
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails, symptoms:e.target.value});
    }
    const handleChangeMood = e =>{
            e.preventDefault();
            setmenstrualConditionDetails({ ...menstrualConditionDetails, mood:e.target.value});
    }
    const handleChangeSex = e =>{
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails, sex:e.target.value});
}

const handleChangeDischarge = e =>{
    e.preventDefault();
    setmenstrualConditionDetails({ ...menstrualConditionDetails, discharge:e.target.value});
}

const handleChangeContraceptive = e =>{
    e.preventDefault();
    setmenstrualConditionDetails({ ...menstrualConditionDetails, contraceptive:e.target.value});
}
 const handleFlowChange = (e)=>{
    e.preventDefault();
    //console.log(e.target.value);
    setmenstrualConditionDetails({...menstrualConditionDetails,[e.target.name]:e.target.value});
}
    const nextStep = () => {
       setState(prevState => prevState+1);
    }

    const prevStep = () => {
        setState(prevState => prevState-1);
    }

    const onSubmit = e =>{
        e.preventDefault();
        const menstrualCondition = {
            email:userEmail,
            mood:menstrualConditionDetails.mood,
            symptoms:menstrualConditionDetails.symptoms,
            sex:menstrualConditionDetails.sex,
            discharge:menstrualConditionDetails.discharge,
            contraceptive:menstrualConditionDetails.contraceptive,
            menstruationFlow:menstrualConditionDetails.menstruationFlow 
        }
        axios.post('/menstrualCondition',menstrualCondition)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    console.log(menstrualConditionDetails);

    switch(step) {
            case 1:
                return <Card1
                        nextStep={nextStep}
                        handleChange={handleFlowChange}
                        menstruationFlow={menstrualConditionDetails.menstruationFlow}
                        />
            case 2:
                return <Card2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChangeSymptoms}
                        symptoms={menstrualConditionDetails.symptoms}
                        />
            case 3:
                return <Card3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChangeMood}
                        mood={menstrualConditionDetails.mood}
                        />
                        case 4:
                            return <Card4
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                    handleChange={handleChangeSex}
                                    sex={menstrualConditionDetails.sex}
                                    />
                        case 5:
                            return <Card5
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                    handleChange={handleChangeDischarge}
                                    discharge={menstrualConditionDetails.discharge}
                                    />
                        case 6:
                            return <Card6
                                    prevStep={prevStep}
                                    handleChange={handleChangeContraceptive}
                                    contraceptive={menstrualConditionDetails.contraceptive}
                                    onSubmit={onSubmit}
                                    />
            }
        };
      