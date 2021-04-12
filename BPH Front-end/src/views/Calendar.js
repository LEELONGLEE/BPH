import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './reactcss/Calendar.css';


const ReactCalendar = ({ setcalenInfor }) => {
  //const [date, setDate] = useState(new Date());
  const [date, setDate] = useState();

  const onChange = date => {
    setDate(date);
    //setcalenInfor(date);
  };

  const onSelectedDate = (value) => {
    setcalenInfor(value);
    console.log("date: ", value);
  }
  return (
    <div>
      <Calendar showWeekNumbers onChange={() => onSelectedDate('a')} value={date} />
      {console.log(date)}
    </div>
  );
};

export default ReactCalendar;