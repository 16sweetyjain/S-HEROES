import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './ResultCard.css';

export default function ResultCard(props){

    const [results, setResults] = useState([]);

    useEffect(() => {
        if(props.reproductiveHealthDetails.sexLife === 'painful' || 
        (props.reproductiveHealthDetails.sexLife === 'lack of interest') ||
        (props.reproductiveHealthDetails.sexLife === 'unsatisfying sex')){
            setResults(arr => [...arr, "Female Sexual Dysfunction "]);
        }
        if((props.reproductiveHealthDetails.junkConsumption >= 5 ||
            props.reproductiveHealthDetails.alcoholConsumption >= 4) &&
            (props.reproductiveHealthDetails.drugUsage === "Yes" ||
            props.reproductiveHealthDetails.smoking === "Yes")){
                setResults(arr => [...arr, "Female Infertility"]);
        }
        if(props.reproductiveHealthDetails.densityOfBodyHairs === 'excess'){
                setResults(arr => [...arr, "Polycystic Ovary Syndrome(PCOS)"]);
        }
        const endo = props.reproductiveHealthDetails.symptoms.filter(x => {
            return (
                x === "Painful and Irregular Periods" || 
                x === "Pain with bowel movements or urination" ||
                x === "Infertility"
              )
            
        })
        if(endo.length > 1){
            setResults(arr => [...arr, "Endometriosis"]);
        }
        const poi = props.reproductiveHealthDetails.symptoms.filter(x => {
            return (
                x === "Painful and Irregular Periods" || 
                x === "Vaginal dryness" ||
                x === "Infertility" || 
                x === "Night Sweats"
              )
            
        })
        if(poi.length > 2 || (poi.length > 1 && props.reproductiveHealthDetails.sexLife === 'lack of interest')){
            setResults(arr => [...arr, "Primary ovarian insufficiency(POI)"]);
        }

        if(props.reproductiveHealthDetails.symptoms.find(x => {
            return (
                x === "Chronic pelvic pain" || 
                x === "Frequent urination"
              )
            
        }) && props.reproductiveHealthDetails.sexLife === 'painful'){
            setResults(arr => [...arr, "Interstitial cystitis(IC)"]);
        }





  }, []);

    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            <h4 className="heading">Based on quiz, possible disorders are:</h4>
            <Grid item xs={3}>
                {results.map(x => (
                 <Card className="card">{x}</Card>
                ))}
            </Grid>   

        </Grid> 
    )
}