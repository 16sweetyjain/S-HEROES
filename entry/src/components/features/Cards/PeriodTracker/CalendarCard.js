import React,{useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CalendarCard.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function CalendarCard(props){

    const [date,onChange]= useState(new Date());
    //console.log(props.fertileDays);

    props.fertileDays.find(x=>{
      if(moment(x).format("DD-MM-YYYY")===moment(date).format("DD-MM-YYYY")){
        console.log(x);
      }
    });


    return (
      <div>

<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
        <Calendar
    style={{ height: 500 }}
    onChange={onChange}
    value={date}
    tileClassName={({ date, view }) => {
      if(props.fertileDays.find(x=>moment(x).format("DD-MM-YYYY")===moment(date).format("DD-MM-YYYY"))){
       return  'highlight'
      }
    }}
    tileDisabled={({ date }) => date.getDay() === 0}
     minDate={
      new Date()
    }
  >
</Calendar>

<Typography gutterBottom variant="caption" component="h4" align='center' color='primary'>
         Dates highlighted with red color shows ovulation dates(i.e. you have high chances of getting pregnant during this time).
          </Typography>
          </Grid>
          </div>

    )
}