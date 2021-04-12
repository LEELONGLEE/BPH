import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import onClickOutside from 'react-onclickoutside'
//import Calendar from './Calendar.js';
import 'react-calendar/dist/Calendar.css';
import './reactcss/Calendar.css';
import Calendar from 'react-calendar';

const ResPopover = ({ setselectDate }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [date, setDate] = useState(new Date(2010, 6, 1));
  const [minDate, setminDate] = useState(new Date(2010, 6, 1));
  const [maxDate, setmaxDate] = useState(new Date(2010, 6, 15));

  //const [selectDate, setselectDate] = useState('a');
  const toggle = () => {
    setPopoverOpen(!popoverOpen);
  }

  // ResPopover.handleClickOutside = () => setPopoverOpen(false);

  // const onSelectedDate = (value) => {
  //   setcalenInfor(value);
  //   console.log("date: ", value);
  // }

  const onSelect = date => {
    setselectDate(date.toLocaleDateString());
    setPopoverOpen(!popoverOpen);
    setDate(date);
    console.log("e: ", date);
    console.log("setselectDate: ", setselectDate);
  }

  return (
    <div>
      <Button id="Popover1" type="button">
        Chọn ngày
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Chọn ngày:</PopoverHeader>
        <PopoverBody id="popbody"><div>
          <Calendar value={date} onChange={onSelect} minDate={minDate} maxDate={maxDate}/>
        </div></PopoverBody>
      </Popover>
    </div>
  );
}

// const clickOutsideConfig = {
//   handleClickOutside: () => ResPopover.handleClickOutside,
// }

// export default onClickOutside(ResPopover, clickOutsideConfig);
export default ResPopover;