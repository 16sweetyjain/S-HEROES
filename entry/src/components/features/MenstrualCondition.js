import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/MenstrualCondition/card1';
import Card2 from './Cards/MenstrualCondition/card2';
import Card3 from './Cards/MenstrualCondition/card3';
import Card4 from './Cards/MenstrualCondition/card4';
import Card5 from './Cards/MenstrualCondition/card5';
import Card6 from './Cards/MenstrualCondition/card6';
import Card7 from './Cards/MenstrualCondition/card7';
import Card8 from './Cards/MenstrualCondition/card8';
import Card9 from './Cards/MenstrualCondition/card9';
import ResultCard from './Cards/MenstrualCondition/ResultCard';


export default function MenstrualCondition(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [menstrualConditionDetails,setmenstrualConditionDetails] = useState({
        menstruationFlow:'',
        dysmenorrheaSymptoms:[],
        mood:[],
        sex:[],
        vaginalDischarge:[],
        longerThanSevenDays:'',
        tssSymptoms:[],
        amenorrheaSymptoms:[],
        menorrhagiaSymptoms:[],
        results:[]
    });

    const handleChangeTssSymptoms = (e) => {
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails,tssSymptoms:e.target.value});
    }

    const handleChangeAmenorrheaSymptoms= (e) => {
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails, amenorrheaSymptoms:e.target.value});
    }

    const handleChangeMenorrhagiaSymptoms = (e) => {
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails, menorrhagiaSymptoms:e.target.value});
    }

    const handleChangeDysmenorrheaSymptoms = (e) => {
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails, dysmenorrheaSymptoms:e.target.value});
    }
    const handleChangeMood = e =>{
            e.preventDefault();
            setmenstrualConditionDetails({ ...menstrualConditionDetails, mood:e.target.value});
    }
    const handleChangeSex = e =>{
        e.preventDefault();
        setmenstrualConditionDetails({ ...menstrualConditionDetails, sex:e.target.value});
}

const handleChangeVaginalDischarge = e =>{
    e.preventDefault();
    setmenstrualConditionDetails({ ...menstrualConditionDetails, vaginalDischarge:e.target.value});
}

const handleChange=e => {
    e.preventDefault();
    setmenstrualConditionDetails({ ...menstrualConditionDetails, [e.target.name]:e.target.value});

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
        if(menstrualConditionDetails.dysmenorrheaSymptoms.length !=0){
            results.push('Dysmenorrhea');
        }
        if(menstrualConditionDetails.mood == 'Heightened Irritability' || menstrualConditionDetails.mood ==  'Mood Swings' ){
            results.push('Premenstrual Dysphoric Disorder (PMDD)');
        }
        if(menstrualConditionDetails.vaginalDischarge == 'Spotting' || menstrualConditionDetails.longerThanSevenDays == 'Yes' || menstrualConditionDetails.menorrhagiaSymptoms.length != 0){
            results.push('Menorrhagia');
        }
        if(menstrualConditionDetails.tssSymptoms.length !=0){
            results.push(' Toxic Shock Syndrome(TSS)');
        }
        if(menstrualConditionDetails.amenorrheaSymptoms.length !=0){
            results.push('Amenorrhea');
        }

        setmenstrualConditionDetails({ ...menstrualConditionDetails, results: results });

        const menstrualCondition = {
            email:userEmail,
            menstruationFlow:menstrualConditionDetails.menstruationFlow,
            dysmenorrheaSymptoms:menstrualConditionDetails.dysmenorrheaSymptoms,
            mood:menstrualConditionDetails.mood,
            sex:menstrualConditionDetails.sex,
            vaginalDischarge:menstrualConditionDetails.vaginalDischarge,
            longerThanSevenDays:menstrualConditionDetails.longerThanSevenDays,
            tssSymptoms:menstrualConditionDetails.tssSymptoms,
            amenorrheaSymptoms:menstrualConditionDetails.amenorrheaSymptoms,
            menorrhagiaSymptoms:menstrualConditionDetails.menorrhagiaSymptoms,
            results:results
        }
        axios.post('/menstrualCondition',menstrualCondition)
        .then((response)=>{
            console.log(response);
            nextStep();
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
                        handleChange={handleChange}
                        menstruationFlow={menstrualConditionDetails.menstruationFlow}
                        />
            case 2:
                return <Card2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChangeDysmenorrheaSymptoms}
                        symptoms={menstrualConditionDetails.dysmenorrheaSymptoms}
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
                                    handleChange={handleChangeVaginalDischarge}
                                    vaginalDischarge={menstrualConditionDetails.vaginalDischarge}
                                    />
                                    case 6:
                                        return <Card6
                                                nextStep={nextStep}
                                                prevStep={prevStep}
                                                handleChange={handleChange}
                                                longerThanSevenDays={menstrualConditionDetails.longerThanSevenDays}
                                                />
                                                case 7:
                                                    return <Card7
                                                            nextStep={nextStep}
                                                            prevStep={prevStep}
                                                            handleChange={handleChangeTssSymptoms}
                                                            tssSymptoms={menstrualConditionDetails.tssSymptoms}
                                                            />
                                                            case 8:
                                                                return <Card8
                                                                        nextStep={nextStep}
                                                                        prevStep={prevStep}
                                                                        handleChange={handleChangeAmenorrheaSymptoms}
                                                                        amenorrheaSymptoms={menstrualConditionDetails.amenorrheaSymptoms}
                                                                        />
                                                                        case 9:
                                                                            return <Card9
                                                                                    prevStep={prevStep}
                                                                                    handleChange={handleChangeMenorrhagiaSymptoms}
                                                                                    menorrhagiaSymptoms={menstrualConditionDetails.menorrhagiaSymptoms}
                                                                                    onSubmit={onSubmit}
                                                                                    />

                                                                                    case 10: 
                                                                                    return <ResultCard
                                                                                    results={menstrualConditionDetails.results}/>
            }
        };
      