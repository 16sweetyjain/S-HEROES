import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import reports from '../helper_images/reports.jpg';

const useStyles = makeStyles({
  Card: {
    height: "250px",
    width: 'auto',
    paddingTop: '10px',
    textAlign: 'center'
  },
  Media: {
    height: '50%',
    width: '50%',
    margin: 'auto',
    display: 'block'
  },
  Text: {
    height: '30%',
    width: '50%',
    margin: 'auto',
  },
  Button: {
    height: '10%',
    width: '50%',
    margin: 'auto',
    display: 'block'
  }
});

export default function Reports() {
  const classes = useStyles();

  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia className={classes.Media}
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={reports}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.Text}>
          <Typography gutterBottom variant="h5" component="h2">
            Reports
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.Button} size="small" color="primary">
        <Link to='/reports'>Let's Go</Link>
        </Button>
      </CardActions>
    </Card>
  );
}