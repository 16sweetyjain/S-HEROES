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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Card9(props) {
    const classes = makeStyles();

    return (
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    How's sex life?
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <i class="material-icons" onClick={props.prevStep}>chevron_left</i>
                            <FormControl component="fieldset">
                                <RadioGroup name='sexLife' row value={props.sexLife} onChange={props.handleChange}>
                                    <FormControlLabel value="painful" control={<Radio />} label="painful" />
                                    <FormControlLabel value="lack of interest" control={<Radio />} label="lack of interest" />
                                    <FormControlLabel value="unsatisfying" control={<Radio />} label="unsatisfying" />
                                    <FormControlLabel value="normal" control={<Radio />} label="normal" />
                                </RadioGroup>
                            </FormControl>
                        </CardActions>
                    </Card>
                    <Button style={{ marginTop: '50px' }} variant="contained" color="primary" onClick={props.onSubmit}>Submit</Button>
                </Grid>
            </div>
        </div>

    );
}