import React,{useState} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CalendarCard.css';

export default function CalendarCard(props){

    const [date,onChange]= useState(new Date());

    return (
        <Calendar
    style={{ height: 500 }}
    onChange={onChange}
    value={date}
    tileClassName={({ date, view }) => {
      if(props.fertileDays.find(x=>x===moment(date).format("YYYY-MM-DD"))){
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