import React from 'react';
import {Link} from 'react-router-dom';
import './features.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import periodTracker from '../DashboardCards/helper_images/menstrualAnalysis.jpg';


const useStyles = makeStyles({
    Card: {
      height: "250px",
      width: 'auto',
      paddingTop: '10px',
      textAlign: 'center',
      marginTop: '50px'
    },
    Media: {
      height: '50%',
      width: '50%',
      margin: 'auto',
      display: 'block'
    },
    Button: {
      height: '10%',
      width: '50%',
      margin: 'auto',
      display: 'block'
    }
  });

export default function MenstrualAnalysis() {
    const classes = useStyles();
    return (
        <div className='row-wrap mrg40-TB container'>

            <Card className={classes.Card}>
                <CardActionArea>
                    <CardMedia className={classes.Media}
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={periodTracker}
                    title="Contemplative Reptile"
                    />
                    <CardContent>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={classes.Button} size="small" color="primary">
                    <Link to='/periodTracker'>Period Tracker</Link>
                    </Button>
                </CardActions>
                </Card>

                <Card className={classes.Card}>
                <CardActionArea>
                    <CardMedia className={classes.Media}
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={periodTracker}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
  
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={classes.Button} size="small" color="primary">
                    <Link to='/menstrualCondition'>Menstrual Condition</Link>
                    </Button>
                </CardActions>
                </Card>

        </div>
        
    );


};