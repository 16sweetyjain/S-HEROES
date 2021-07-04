import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import '../../features.css'

export default function card3(props){
    const classes = makeStyles();
 
    return(
        <div className='container'  >
            <div className='row'>
            <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
            <Card className='form'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Enter your menstrual cycle length
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <i class="material-icons icon" onClick={props.prevStep}>chevron_left</i>
      <TextField
          required={true}
          id="menstrualCycleLength"
          label="Required"
          variant="outlined"
          value = {props.menstrualCycleLength}
          onChange ={props.handleChange}
        />
      </CardActions>
    </Card>
    <Button style={{ marginTop:'50px'}} variant="contained" color="primary" onClick={props.onSubmit}>Submit</Button>
    </Grid>
            </div>
        </div>
        
    )



}