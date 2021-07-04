import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/MentalHealth/card1';
import Card2 from './Cards/MentalHealth/card2';
import Card3 from './Cards/MentalHealth/card3';
import Card4 from './Cards/MentalHealth/card4';
import Card5 from './Cards/MentalHealth/card5';
import Card6 from './Cards/MentalHealth/card6';
import Card7 from './Cards/MentalHealth/card7';
import Card8 from './Cards/MentalHealth/card8';
import Card9 from './Cards/MentalHealth/card9';
import Card10 from './Cards/MentalHealth/card10';
import Card11 from './Cards/MentalHealth/card11';
import Card12 from './Cards/MentalHealth/card12';
import ResultCard from './Cards/MentalHealth/ResultCard';


export default function MentalHealth(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [mentalHealthDetails,setMentalHealthDetails] = useState({
        aloneTime:'',
        tired:'',
        fidgety:'',
        aches:'',
        easyDistraction:'',
        overthinking:'',
        sadness:'',
        angry:'',
        socialContact:'',
        troubleConcentrating:'',
        troubleSleeping:'',
        otherProblems:'',
        count:0
    });

    const handleChangeProblems = (e)=>{
        e.preventDefault();
        setMentalHealthDetails({...mentalHealthDetails,[e.target.id]:e.target.value});
    }


 const handleChange = (e)=>{
    e.preventDefault();
    setMentalHealthDetails({...mentalHealthDetails,[e.target.name]:e.target.value});
}
    const nextStep = () => {
       setState(prevState => prevState+1);
    }

    const prevStep = () => {
        setState(prevState => prevState-1);
    }

    const onSubmit = e =>{
        e.preventDefault();
         let count =0;
        for (const [key, value] of Object.entries(mentalHealthDetails)) {
            if(value === "Yes"){
                count++;
            }
        }
        if(mentalHealthDetails.otherProblems.length != 0){
            count++;
        }
        
        setMentalHealthDetails({...mentalHealthDetails,count:count});

        const mentalHealthTracker = {
            email:userEmail,
            aloneTime:mentalHealthDetails.aloneTime,
            tired:mentalHealthDetails.tired,
            fidgety:mentalHealthDetails.fidgety,
            aches:mentalHealthDetails.aches,
            easyDistraction:mentalHealthDetails.easyDistraction,
            overthinking:mentalHealthDetails.overthinking,
            sadness:mentalHealthDetails.sadness,
            angry:mentalHealthDetails.angry,
            socialContact:mentalHealthDetails.socialContact,
            troubleConcentrating:mentalHealthDetails.troubleConcentrating,
            troubleSleeping:mentalHealthDetails.troubleSleeping,
            otherProblems:mentalHealthDetails.otherProblems,
            results:count
        }
        
        axios.post('/mentalHealth',mentalHealthTracker)
        .then((response)=>{
            console.log(response);
            nextStep();
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    console.log(mentalHealthDetails);

    switch(step) {
            case 1:
                return <Card1
                        nextStep={nextStep}
                        handleChange={handleChange}
                        aloneTime={mentalHealthDetails.aloneTime}
                        />
            case 2:
                return <Card2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        tired={mentalHealthDetails.tired}
                        />
            case 3:
                return <Card3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        fidgety={mentalHealthDetails.fidgety}
                      
                        />
        
            case 4:
                    return <Card4
                            nextStep={nextStep}
                            handleChange={handleChange}
                            aches={mentalHealthDetails.aches}
                            />
                case 5:
                    return <Card5
                            nextStep={nextStep}
                            prevStep={prevStep}
                            handleChange={handleChange}
                            easyDistraction={mentalHealthDetails.easyDistraction}
                            />
                case 6:
                    return <Card6
                            nextStep={nextStep}
                            prevStep={prevStep}
                            handleChange={handleChange}
                            overthinking={mentalHealthDetails.overthinking}
                           
                            />
                
                case 7:
                        return <Card7
                                nextStep={nextStep}
                                handleChange={handleChange}
                                sadness={mentalHealthDetails.sadness}
                                />
                    case 8:
                        return <Card8
                                nextStep={nextStep}
                                prevStep={prevStep}
                                handleChange={handleChange}
                                angry={mentalHealthDetails.angry}
                                />
                    case 9:
                        return <Card9
                                nextStep={nextStep}
                                prevStep={prevStep}
                                handleChange={handleChange}
                                socialContact={mentalHealthDetails.socialContact}
                                />

                                case 10:
                                    return <Card10
                                            nextStep={nextStep}
                                            handleChange={handleChange}
                                            troubleConcentrating={mentalHealthDetails.troubleConcentrating}
                                            />
                                case 11:
                                    return <Card11
                                            nextStep={nextStep}
                                            prevStep={prevStep}
                                            handleChange={handleChange}
                                            troubleSleeping={mentalHealthDetails.troubleSleeping}
                                            />
                                case 12:
                                    return <Card12
                                            nextStep={nextStep}
                                            prevStep={prevStep}
                                            handleChange={handleChangeProblems}
                                            otherProblems={mentalHealthDetails.otherProblems}
                                            onSubmit={onSubmit}
                                            />
                                case 13:
                                    return <ResultCard
                                            count={mentalHealthDetails.count}
                                    />
                    
                    
                    }
        };
      