import React from 'react';
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
            <h4 className="heading">Best Suited Methods For You:</h4>
            <Grid item xs={3}>
                {props.results.map(x => (
                 <Card className="card4">{x}</Card>
                ))}
            </Grid> 
        </Grid> 
    )
}