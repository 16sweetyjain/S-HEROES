import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './ResultCard.css';

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
            <h4 className="heading">Based on quiz, possible disorders are:</h4>
            <Grid item xs={3}>
                {props.results.map(x => (
                 <Card className="card1">{x}</Card>
                ))}
            </Grid>   

        </Grid> 
    )
}