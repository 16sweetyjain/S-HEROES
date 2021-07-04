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
import reproductiveHealth from '../helper_images/reproductiveHealth.png';

const useStyles = makeStyles({
  Card: {
    width: 300,
    margin: 'auto'
  },
  Media: {
    height: '100%',
    width: '100%'
  }
});

export default function ReproductiveHealth() {
  const classes = useStyles();

  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia className={classes.Media}
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={reproductiveHealth}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Reproductive Health
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to='/reproductiveHealth'>Let's Go</Link>
        </Button>
      </CardActions>
    </Card>
  );
}