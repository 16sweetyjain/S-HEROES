import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './ResultCard.css';

export default function ResultCard(props){

    const [results, setResults] = useState([]);
    useEffect(() => {
        if(props.birthControlDetails.important.find(x => {
            return (x === "Easy to use" || x === "Reduces periods") && props.birthControlDetails.hormonalMethod === "Yes"
        })){
            setResults(arr => [...arr, "Birth control pill"])
        }

        if(props.birthControlDetails.important.find(x => {
            return (x === "Best at preventing pregnancy" || x === "Doesnt reduce sexual pleasure") && props.birthControlDetails.vaginalMethod === "Yes"
        })){
            setResults(arr => [...arr, "Intrauterine device (IUD)"])
        }

        if(props.birthControlDetails.important.find(x => {
            return x === "Prevents STDs (sexually transmitted diseases)" || x === "Doesnt reduce sexual pleasure" || x === "Easy to use" || x === "No or few side effects"
        })){
            setResults(arr => [...arr, "Condom"])
        }

        if(props.birthControlDetails.important.find(x => {
            return (x === "Cost (Inexpensive)" || x === "Easy to use" || x === "Prevents STDs (sexually transmitted diseases)") && props.birthControlDetails.vaginalMethod === "Yes"
        })){
            setResults(arr => [...arr, "Cervical Cap"])
        }

        if(props.birthControlDetails.important.find(x => {
            return x === "Best at preventing pregnancy" && props.birthControlDetails.hormonalMethod === "Yes"
        })){
            setResults(arr => [...arr, "Birth Control Shot"])
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
            <h4 className="heading">Best Suited Methods For You:</h4>
            <Grid item xs={3}>
                {results.map(x => (
                 <Card className="card">{x}</Card>
                ))}
            </Grid> 
        </Grid> 
    )
}