import React,{useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CalendarCard.css';

export default function CalendarCard(props){

    const [date,onChange]= useState(new Date());
    //console.log(props.fertileDays);

    props.fertileDays.find(x=>{
      if(moment(x).format("DD-MM-YYYY")===moment(date).format("DD-MM-YYYY")){
        console.log(x);
      }
    });


    return (
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
    )
}