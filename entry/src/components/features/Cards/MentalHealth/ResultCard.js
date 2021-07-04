import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './ResultCard.css';
import Circle from 'react-circle';


export default function ResultCard(props){

    const [count, setCount] = useState(0);
    console.log(props.mentalHealthDetails)
    useEffect(() => {
        for (const [key, value] of Object.entries(props.mentalHealthDetails)) {
            if(value === "Yes"){
                setCount(prevState => prevState+1);
            }
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
            <h4 className="heading">Your Depression Score is:</h4>
            <Grid item xs={3}>
            <Circle size={300} progressColor="#f06292" bgColor="#c5cae9" 
            progress={count * 9}/>
            {count < 5 && <Card className="card">Your symptoms seem normal. No need to worry. </Card>}
            {count >= 5 && count <= 8 && <Card className="card">You are mildly depressed. Please visit a doctor.</Card>}
            {count > 8 && <Card className="card">Your symptoms suggest severe depression. Please visit a doctor as soon as possible.</Card>} 
            </Grid>  
        </Grid> 
    )
}