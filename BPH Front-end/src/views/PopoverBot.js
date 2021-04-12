import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
//import onClickOutside from 'react-onclickoutside'

import './reactcss/Calendar.css';
import Botchat from './botchat/Bot_Chat.js'
import { VscHubot } from 'react-icons/vsc'
import './reactcss/PopoverBot.css'
const BotPopover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  //const [selectDate, setselectDate] = useState('a');
  const toggle = () => {
    setPopoverOpen(!popoverOpen);
  }

  //BotPopover.handleClickOutside = () => setPopoverOpen(false);

  return (
    <div>
        <Button id="Popover2" className="vsccss" type="button">
          <VscHubot className="vscbot" />
        </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover2" toggle={toggle}>
        <PopoverBody id="popbody"><div>
          <Botchat />
        </div></PopoverBody>
      </Popover>
    </div>
  );
}

// const clickOutsideConfig = {
//   handleClickOutside: () => BotPopover.handleClickOutside,
// }

// export default onClickOutside(BotPopover, clickOutsideConfig);
export default BotPopover;