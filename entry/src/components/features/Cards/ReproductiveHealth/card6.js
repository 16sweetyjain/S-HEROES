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
import Slider from '@material-ui/core/Slider';
import '../../features.css'


export default function Card6(props) {
    const classes = makeStyles();

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        }
    ];

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
                    <Card className='form'>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    How frequently do you consume alcohol?
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <i class="material-icons icon" onClick={props.prevStep}>chevron_left</i>
                            <Typography id="discrete-slider-small-steps" gutterBottom>
                                Weekly
                            </Typography>
                            <Slider
                                defaultValue={0}
                                id='alcoholConsumption'
                                aria-labelledby="discrete-slider-small-steps"
                                step={1}
                                marks={marks}
                                min={0}
                                max={7}
                                valueLabelDisplay="auto"
                                value={props.alcoholConsumption}
                                onChange={props.handleChange}
                            />
                            <i class="material-icons icon" onClick={props.nextStep}>chevron_right</i>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        </div>

    );
}