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
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import '../../features.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const factors = [ //  menorrhagia   symptoms,
    'Soaking 1 or more tampons or pads every hour for many consecutive hours',
    'Doubling up on pads',
    'Changing pads or tampons during the night',
    'Long-lasting menstrual periods (longer than 7 days)',
    'Blood clots the size of a quarter or larger',
    'Bleeding that is keeping you from doing normal activities',
    'Constant pain in lower part of stomach',
    'Lacking energy',
    'Shortness of breath'
];

function getStyles(name, discharge, theme) {
  return {
    fontWeight:
    discharge.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Card9(props) {
  const classes = useStyles();
  const theme = useTheme();

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
                Pick all relevant options
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <i class="material-icons icon" onClick={props.prevStep}>chevron_left</i>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">Symptoms</InputLabel>
                <Select
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={props.menorrhagiaSymptoms}
                  onChange={props.handleChange}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {factors.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, props.menorrhagiaSymptoms, theme)}>
                      <Checkbox checked={props.menorrhagiaSymptoms.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </CardActions>
          </Card>
          <Button style={{ marginTop:'50px'}} variant="contained" color="primary" onClick={props.onSubmit}>Submit</Button>
        </Grid>
      </div>
    </div>

  );
}