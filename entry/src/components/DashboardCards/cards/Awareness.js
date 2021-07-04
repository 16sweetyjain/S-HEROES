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
import awareness from '../helper_images/awareness.jpg';

const useStyles = makeStyles({
  Card: {
    height: "250px",
    width: 'auto',
    paddingTop: '10px',
    textAlign: 'center'
  },
  Media: {
    height: '70%',
    width: '50%',
    margin: 'auto',
    display: 'block'
  },
  Button: {
    height: '10%',
    width: '50%',
    margin: 'auto',
    marginTop: '20px',
    display: 'block'
  }
});

export default function Awareness() {
  const classes = useStyles();

  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia className={classes.Media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={awareness}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Awareness
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.Button} size="small" color="primary">
        <Link to='/awareness'>Let's Go</Link>
        </Button>
      </CardActions>
    </Card>
  );
}