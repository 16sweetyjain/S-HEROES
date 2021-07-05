import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './ResultCard.css';
import Circle from 'react-circle';


export default function ResultCard(props){

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
            progress={props.count * 12}/>
            {props.count < 6 && <Card className="card3">Your symptoms seem normal. No need to worry. </Card>}
            {props.count >= 6 && props.count <= 11 && <Card className="card3">You are mildly depressed. Please visit a doctor.</Card>}
            {props.count > 11 && <Card className="card3">Your symptoms suggest severe depression. Please visit a doctor as soon as possible.</Card>} 
            </Grid>  
        </Grid> 
    )
}